const { v4: uuidv4 } = require("uuid");
const { pool } = require("../db");

// Stockage des rooms multijoueur en mémoire
const rooms = new Map();

// Mélanger un tableau
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Préparer les questions pour une room (multi-catégories + count) — depuis la DB
async function prepareRoomQuestions(categoryIds, count = 20) {
  const validCounts = [20, 30, 40, 50];
  const questionCount = validCounts.includes(count) ? count : 20;

  const ids = Array.isArray(categoryIds) ? categoryIds : [categoryIds];
  const placeholders = ids.map(() => "?").join(",");

  const [questions] = await pool.query(
    `SELECT q.id, q.question, q.correct_answer AS correctAnswer
     FROM questions q
     WHERE q.category_id IN (${placeholders})
     ORDER BY RAND()
     LIMIT ?`,
    [...ids, questionCount]
  );

  if (questions.length === 0) return [];

  const questionIds = questions.map((q) => q.id);
  const ansPlaceholders = questionIds.map(() => "?").join(",");
  const [answers] = await pool.query(
    `SELECT question_id, answer_text FROM answers WHERE question_id IN (${ansPlaceholders})`,
    questionIds
  );

  const answersMap = {};
  answers.forEach((a) => {
    if (!answersMap[a.question_id]) answersMap[a.question_id] = [];
    answersMap[a.question_id].push(a.answer_text);
  });

  return questions.map((q) => {
    const allAnswers = answersMap[q.id] || [];
    const wrongAnswers = allAnswers.filter((a) => a !== q.correctAnswer);
    const selectedWrong = shuffleArray(wrongAnswers).slice(0, 3);
    const displayedAnswers = shuffleArray([...selectedWrong, q.correctAnswer]);
    return {
      id: q.id,
      question: q.question,
      answers: displayedAnswers,
      correctAnswer: q.correctAnswer,
    };
  });
}

function setupWebSocket(io) {
  io.on("connection", (socket) => {
    console.log(`🔌 Joueur connecté: ${socket.id}`);

    // Créer une room multijoueur
    socket.on("create_room", async ({ playerName, categoryId, categoryIds, questionCount }) => {
      try {
        const roomId = uuidv4().substring(0, 6).toUpperCase();

        // Supporter l'ancien format (categoryId unique) et le nouveau (categoryIds tableau)
        const ids = categoryIds || (categoryId ? [categoryId] : []);

        // Récupérer les noms de catégories depuis la DB
        const placeholders = ids.map(() => "?").join(",");
        const [cats] = await pool.query(
          `SELECT id, name FROM categories WHERE id IN (${placeholders})`,
          ids
        );
        const categoryName = cats.map((c) => c.name).join(", ");

        const room = {
          id: roomId,
          categoryIds: ids,
          categoryName,
          host: socket.id,
          players: [
            {
              id: socket.id,
              name: playerName,
              score: 0,
              currentAnswer: null,
              hasAnswered: false,
            },
          ],
          questions: await prepareRoomQuestions(ids, questionCount || 20),
          currentQuestionIndex: 0,
          status: "waiting",
          timer: null,
          timeLeft: 30,
        };

        rooms.set(roomId, room);
        socket.join(roomId);

        socket.emit("room_created", {
          roomId,
          categoryName: room.categoryName,
          players: room.players.map((p) => ({ name: p.name, score: p.score })),
        });

        console.log(`🏠 Room ${roomId} créée par ${playerName}`);
      } catch (err) {
        console.error("Erreur création room:", err);
        socket.emit("error_message", { message: "Erreur lors de la création de la room" });
      }
    });

    // Rejoindre une room
    socket.on("join_room", ({ roomId, playerName }) => {
      const room = rooms.get(roomId);

      if (!room) {
        socket.emit("error_message", { message: "Room introuvable" });
        return;
      }

      if (room.status !== "waiting") {
        socket.emit("error_message", { message: "La partie a déjà commencé" });
        return;
      }

      if (room.players.length >= 8) {
        socket.emit("error_message", { message: "La room est pleine (max 8 joueurs)" });
        return;
      }

      room.players.push({
        id: socket.id,
        name: playerName,
        score: 0,
        currentAnswer: null,
        hasAnswered: false,
      });

      socket.join(roomId);

      const playersList = room.players.map(p => ({ name: p.name, score: p.score }));

      // Notifier tout le monde dans la room
      io.to(roomId).emit("player_joined", {
        players: playersList,
        playerName,
        categoryName: room.categoryName,
        roomId,
      });

      console.log(`👤 ${playerName} a rejoint la room ${roomId}`);
    });

    // Démarrer la partie
    socket.on("start_game", ({ roomId }) => {
      const room = rooms.get(roomId);
      if (!room) return;
      if (room.host !== socket.id) return;
      if (room.players.length < 2) {
        socket.emit("error_message", { message: "Il faut au moins 2 joueurs pour commencer" });
        return;
      }

      room.status = "playing";
      room.currentQuestionIndex = 0;

      // Envoyer la première question
      sendQuestion(io, room);
      console.log(`🎮 Partie démarrée dans la room ${roomId}`);
    });

    // Réponse d'un joueur
    socket.on("submit_answer", ({ roomId, answer }) => {
      const room = rooms.get(roomId);
      if (!room || room.status !== "playing") return;

      const player = room.players.find(p => p.id === socket.id);
      if (!player || player.hasAnswered) return;

      const currentQuestion = room.questions[room.currentQuestionIndex];
      const isCorrect = answer === currentQuestion.correctAnswer;

      player.hasAnswered = true;
      player.currentAnswer = answer;
      if (isCorrect) {
        player.score += 1;
      }

      // Envoyer le feedback au joueur
      socket.emit("answer_result", {
        isCorrect,
        correctAnswer: currentQuestion.correctAnswer,
        selectedAnswer: answer,
        score: player.score,
      });

      // Envoyer la mise à jour du score à tous
      const playersList = room.players.map(p => ({
        name: p.name,
        score: p.score,
        hasAnswered: p.hasAnswered,
      }));
      io.to(roomId).emit("players_update", { players: playersList });

      // Vérifier si tous les joueurs ont répondu
      const allAnswered = room.players.every(p => p.hasAnswered);
      if (allAnswered) {
        clearTimeout(room.timer);
        setTimeout(() => nextQuestion(io, room), 2000);
      }
    });

    // Déconnexion
    socket.on("disconnect", () => {
      console.log(`❌ Joueur déconnecté: ${socket.id}`);

      // Nettoyer les rooms
      for (const [roomId, room] of rooms.entries()) {
        const playerIndex = room.players.findIndex(p => p.id === socket.id);
        if (playerIndex !== -1) {
          const playerName = room.players[playerIndex].name;
          room.players.splice(playerIndex, 1);

          if (room.players.length === 0) {
            clearTimeout(room.timer);
            rooms.delete(roomId);
            console.log(`🗑️ Room ${roomId} supprimée (vide)`);
          } else {
            // Si l'hôte part, transférer à un autre joueur
            if (room.host === socket.id) {
              room.host = room.players[0].id;
            }
            io.to(roomId).emit("player_left", {
              playerName,
              players: room.players.map(p => ({ name: p.name, score: p.score })),
            });
          }
        }
      }
    });
  });
}

function sendQuestion(io, room) {
  const question = room.questions[room.currentQuestionIndex];

  // Reset les réponses des joueurs
  room.players.forEach(p => {
    p.hasAnswered = false;
    p.currentAnswer = null;
  });

  room.timeLeft = 30;

  // Envoyer la question (sans la réponse correcte côté client multijoueur)
  io.to(room.id).emit("new_question", {
    questionIndex: room.currentQuestionIndex,
    totalQuestions: room.questions.length,
    question: question.question,
    answers: question.answers,
    timeLeft: 30,
  });

  // Timer de 30 secondes
  room.timer = setTimeout(() => {
    // Temps écoulé → passer à la question suivante
    io.to(room.id).emit("time_up", {
      correctAnswer: question.correctAnswer,
    });

    setTimeout(() => nextQuestion(io, room), 1000);
  }, 30000);

  // Envoyer le countdown
  startCountdown(io, room);
}

function startCountdown(io, room) {
  const interval = setInterval(() => {
    if (room.status !== "playing" || !rooms.has(room.id)) {
      clearInterval(interval);
      return;
    }

    room.timeLeft -= 1;
    if (room.timeLeft >= 0) {
      io.to(room.id).emit("timer_update", { timeLeft: room.timeLeft });
    } else {
      clearInterval(interval);
    }
  }, 1000);
}

function nextQuestion(io, room) {
  room.currentQuestionIndex += 1;

  if (room.currentQuestionIndex >= room.questions.length) {
    // Fin de la partie
    room.status = "finished";

    const finalScores = room.players
      .map(p => ({ name: p.name, score: p.score }))
      .sort((a, b) => b.score - a.score);

    io.to(room.id).emit("game_over", {
      scores: finalScores,
      winner: finalScores[0],
      totalQuestions: room.questions.length,
    });

    // Supprimer la room après 5 minutes
    setTimeout(() => {
      rooms.delete(room.id);
    }, 5 * 60 * 1000);

    console.log(`🏆 Partie terminée dans la room ${room.id}`);
  } else {
    sendQuestion(io, room);
  }
}

module.exports = { setupWebSocket };
