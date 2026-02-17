const express = require("express");
const router = express.Router();
const { pool } = require("../db");

// Fonction utilitaire : mélanger un tableau (Fisher-Yates)
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Récupérer les questions depuis la DB avec leurs réponses
async function fetchQuestions(categoryIds, limit) {
  const placeholders = categoryIds.map(() => "?").join(",");
  const [questions] = await pool.query(
    `SELECT q.id, q.category_id AS categoryId, q.question, q.correct_answer AS correctAnswer
     FROM questions q
     WHERE q.category_id IN (${placeholders})
     ORDER BY RAND()
     LIMIT ?`,
    [...categoryIds, limit]
  );

  if (questions.length === 0) return [];

  const questionIds = questions.map((q) => q.id);
  const ansPlaceholders = questionIds.map(() => "?").join(",");
  const [answers] = await pool.query(
    `SELECT question_id, answer_text FROM answers WHERE question_id IN (${ansPlaceholders})`,
    questionIds
  );

  // Grouper les réponses par question
  const answersMap = {};
  answers.forEach((a) => {
    if (!answersMap[a.question_id]) answersMap[a.question_id] = [];
    answersMap[a.question_id].push(a.answer_text);
  });

  return questions.map((q) => ({
    ...q,
    answers: answersMap[q.id] || [],
  }));
}

// Fonction pour préparer les questions avec 4 réponses aléatoires (dont la bonne)
function prepareQuestions(rawQuestions) {
  return rawQuestions.map((q) => {
    const wrongAnswers = q.answers.filter((a) => a !== q.correctAnswer);
    const selectedWrong = shuffleArray(wrongAnswers).slice(0, 3);
    const displayedAnswers = shuffleArray([...selectedWrong, q.correctAnswer]);

    return {
      id: q.id,
      categoryId: q.categoryId,
      question: q.question,
      answers: displayedAnswers,
      correctAnswer: q.correctAnswer,
    };
  });
}

// POST /api/questions/multi — Récupérer des questions multi-catégories
// Body: { categoryIds: [1, 2, 3], count: 20 }
router.post("/multi", async (req, res) => {
  const { categoryIds, count = 20 } = req.body;

  if (!categoryIds || !Array.isArray(categoryIds) || categoryIds.length === 0) {
    return res
      .status(400)
      .json({ message: "categoryIds requis (tableau non vide)" });
  }

  const validCounts = [20, 30, 40, 50];
  const questionCount = validCounts.includes(count) ? count : 20;

  try {
    const rawQuestions = await fetchQuestions(categoryIds, questionCount);
    if (rawQuestions.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucune question trouvée pour ces catégories" });
    }
    const prepared = prepareQuestions(rawQuestions);
    res.json(prepared);
  } catch (err) {
    console.error("Erreur récupération questions multi:", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

// GET /api/questions/:categoryId - Récupérer les questions d'une catégorie (rétro-compatible)
router.get("/:categoryId", async (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  const count = parseInt(req.query.count) || 10;
  const validCounts = [10, 20, 30, 40, 50];
  const questionCount = validCounts.includes(count) ? count : 10;

  try {
    const rawQuestions = await fetchQuestions([categoryId], questionCount);
    if (rawQuestions.length === 0) {
      return res
        .status(404)
        .json({ message: "Aucune question trouvée pour cette catégorie" });
    }
    const prepared = prepareQuestions(rawQuestions);
    res.json(prepared);
  } catch (err) {
    console.error("Erreur récupération questions:", err);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
