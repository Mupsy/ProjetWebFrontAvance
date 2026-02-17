import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { getSocket } from "../services/socket";
import Timer from "../components/Timer";

function MultiplayerGame() {
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const {
    roomId,
    multiplayerQuestion,
    multiplayerQuestionIndex,
    multiplayerTotalQuestions,
    multiplayerTimeLeft,
    multiplayerPlayers,
    answerResult,
  } = state;

  useEffect(() => {
    if (!roomId) {
      navigate("/multiplayer");
      return;
    }

    const socket = getSocket();

    socket.on("new_question", (questionData) => {
      dispatch({ type: "SET_MULTIPLAYER_QUESTION", payload: questionData });
      setSelectedAnswer(null);
      setShowResult(false);
      setCorrectAnswer(null);
    });

    socket.on("timer_update", ({ timeLeft }) => {
      dispatch({ type: "SET_MULTIPLAYER_TIMER", payload: timeLeft });
    });

    socket.on("answer_result", (result) => {
      dispatch({ type: "SET_ANSWER_RESULT", payload: result });
      setCorrectAnswer(result.correctAnswer);
      setShowResult(true);
    });

    socket.on("time_up", ({ correctAnswer: correct }) => {
      setCorrectAnswer(correct);
      setShowResult(true);
    });

    socket.on("players_update", ({ players }) => {
      dispatch({ type: "SET_MULTIPLAYER_PLAYERS", payload: players });
    });

    socket.on("game_over", ({ scores, winner, totalQuestions }) => {
      dispatch({
        type: "SET_MULTIPLAYER_GAME_OVER",
        payload: { scores, winner, totalQuestions },
      });
      setTimeout(() => {
        navigate("/multiplayer/results");
      }, 1500);
    });

    return () => {
      socket.off("new_question");
      socket.off("timer_update");
      socket.off("answer_result");
      socket.off("time_up");
      socket.off("players_update");
      socket.off("game_over");
    };
  }, [roomId, navigate, dispatch]);

  const handleAnswer = (answer) => {
    if (selectedAnswer || showResult) return;

    setSelectedAnswer(answer);
    const socket = getSocket();
    socket.emit("submit_answer", { roomId, answer });
  };

  if (!multiplayerQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/40 font-mono text-sm tracking-wider">CHARGEMENT...</p>
        </div>
      </div>
    );
  }

  const getAnswerClass = (answer) => {
    const base = "group flex items-center gap-3 px-5 py-4 clip-corner text-left transition-all duration-300 font-body font-semibold text-base tracking-wide";
    if (!showResult) {
      if (answer === selectedAnswer) return `${base} border border-neon-purple/50 bg-neon-purple/10 text-neon-purple shadow-neon-purple`;
      return `${base} bg-cyber-card border border-cyber-border hover:border-neon-cyan/40 hover:bg-neon-cyan/5 hover:shadow-neon-cyan text-white/80 cursor-pointer`;
    }
    if (answer === correctAnswer) return `${base} border border-neon-green/50 bg-neon-green/10 text-neon-green shadow-neon-green`;
    if (answer === selectedAnswer && answer !== correctAnswer)
      return `${base} border border-neon-pink/50 bg-neon-pink/10 text-neon-pink shadow-neon-pink animate-shake`;
    return `${base} border border-cyber-border/30 bg-cyber-darker/50 text-white/20 cursor-not-allowed`;
  };

  return (
    <div className="min-h-screen py-6 px-4 animate-fade-in">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1">
            <span className="text-white/40 text-xs font-mono tracking-widest">
              QUESTION {multiplayerQuestionIndex + 1}/{multiplayerTotalQuestions}
            </span>
            <div className="w-full bg-cyber-surface h-1 mt-2 overflow-hidden border border-cyber-border/30">
              <div
                className="h-full bg-gradient-to-r from-neon-cyan to-neon-pink transition-all duration-500"
                style={{
                  width: `${((multiplayerQuestionIndex + 1) / multiplayerTotalQuestions) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="ml-4">
            <Timer timeLeft={multiplayerTimeLeft} total={30} />
          </div>
        </div>

        {/* Player score bar */}
        <div className="flex flex-wrap gap-2 mb-5">
          {multiplayerPlayers.map((player, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-3 py-1 text-xs font-mono tracking-wider border transition-all duration-300 ${
                player.hasAnswered
                  ? "border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan"
                  : "border-cyber-border bg-cyber-card text-white/30"
              }`}
            >
              <span>{player.name}</span>
              <span className="font-bold">{player.score}</span>
            </div>
          ))}
        </div>

        {/* Question */}
        <div className="cyber-card clip-corner p-6 mb-6 animate-fade-up relative overflow-hidden scanline-overlay">
          <h2 className="text-lg md:text-xl font-body font-bold text-white text-center leading-relaxed tracking-wide relative z-10">
            {multiplayerQuestion.question}
          </h2>
        </div>

        {/* Answers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {multiplayerQuestion.answers.map((answer, index) => (
            <button
              key={index}
              className={getAnswerClass(answer)}
              onClick={() => handleAnswer(answer)}
              disabled={showResult || selectedAnswer !== null}
            >
              <span className="w-8 h-8 clip-corner bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-xs font-mono font-bold text-neon-cyan shrink-0">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-sm md:text-base">{answer}</span>
            </button>
          ))}
        </div>

        {/* Result overlay */}
        {showResult && (
          <div className="text-center py-4 animate-fade-up">
            {answerResult ? (
              <p className={`text-lg font-sans font-bold tracking-wider ${answerResult.isCorrect ? "text-neon-green neon-text-cyan" : "text-neon-pink neon-text-pink"}`}>
                {answerResult.isCorrect ? "✅ CORRECT" : "❌ INCORRECT"}
              </p>
            ) : (
              <p className="text-lg font-sans font-bold tracking-wider text-neon-yellow">⏱️ TEMPS ÉCOULÉ</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiplayerGame;
