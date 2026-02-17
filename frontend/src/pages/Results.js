import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

function Results() {
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();
  const { score, answers, selectedCategory } = state;

  const totalQuestions = answers.length;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const getEmoji = () => {
    if (percentage === 100) return "🏆";
    if (percentage >= 80) return "🌟";
    if (percentage >= 60) return "😊";
    if (percentage >= 40) return "🤔";
    return "😅";
  };

  const getMessage = () => {
    if (percentage === 100) return "Parfait ! Vous êtes un expert !";
    if (percentage >= 80) return "Excellent ! Très bonne performance !";
    if (percentage >= 60) return "Bien joué ! Continuez comme ça !";
    if (percentage >= 40) return "Pas mal, vous pouvez faire mieux !";
    return "Courage, la prochaine sera la bonne !";
  };

  const getScoreColor = () => {
    if (percentage >= 80) return "stroke-neon-green";
    if (percentage >= 60) return "stroke-neon-yellow";
    return "stroke-neon-pink";
  };

  const getScoreGlow = () => {
    if (percentage >= 80) return "drop-shadow-[0_0_8px_rgba(57,255,20,0.5)]";
    if (percentage >= 60) return "drop-shadow-[0_0_8px_rgba(255,230,0,0.5)]";
    return "drop-shadow-[0_0_8px_rgba(255,45,149,0.5)]";
  };

  const handleReplay = () => {
    dispatch({ type: "RESET_QUIZ" });
    navigate("/categories");
  };

  const handleHome = () => {
    dispatch({ type: "RESET_QUIZ" });
    navigate("/");
  };

  const handleChangeCategory = () => {
    dispatch({ type: "RESET_QUIZ" });
    navigate("/categories");
  };

  return (
    <div className="min-h-screen py-8 px-4 animate-fade-in">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-6xl block mb-3 animate-bounce-in">{getEmoji()}</span>
          <h1 className="text-2xl md:text-3xl font-sans font-bold tracking-wider text-white neon-text-cyan mb-2">RÉSULTATS</h1>
          {selectedCategory && (
            <p className="text-white/30 font-mono text-sm tracking-wider">
              {selectedCategory.icon} {selectedCategory.name.toUpperCase()}
            </p>
          )}
        </div>

        {/* Score circle */}
        <div className="relative w-40 h-40 mx-auto mb-6">
          <svg viewBox="0 0 120 120" className={`w-full h-full -rotate-90 ${getScoreGlow()}`}>
            <circle cx="60" cy="60" r="54" fill="none" strokeWidth="6" className="stroke-cyber-surface" />
            <circle
              cx="60" cy="60" r="54" fill="none" strokeWidth="6"
              className={`${getScoreColor()} score-ring-transition`}
              strokeLinecap="round"
              style={{
                strokeDasharray: `${(percentage / 100) * 339.292} 339.292`,
              }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-sans font-bold text-neon-cyan neon-text-cyan">{score}</span>
            <span className="text-white/30 text-sm font-mono">/{totalQuestions}</span>
          </div>
        </div>

        <p className="text-center text-2xl font-sans font-bold text-neon-cyan neon-text-cyan mb-1">{percentage}%</p>
        <p className="text-center text-white/40 font-body mb-6">{getMessage()}</p>

        {/* Recap */}
        <div className="cyber-card clip-corner p-5 mb-6">
          <h3 className="text-sm font-sans font-bold tracking-wider text-white/60 mb-3">RÉCAPITULATIF</h3>
          <div className="space-y-1.5">
            {answers.map((answer, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 py-2 text-sm font-body border-l-2 ${
                  answer.isCorrect
                    ? "border-neon-green/50 bg-neon-green/5"
                    : "border-neon-pink/50 bg-neon-pink/5"
                }`}
              >
                <span className="font-mono font-bold text-white/30 w-8">Q{index + 1}</span>
                <span>{answer.isCorrect ? "✅" : "❌"}</span>
                {!answer.isCorrect && (
                  <span className="text-white/30 text-xs font-mono ml-auto truncate max-w-[150px]">
                    {answer.correct}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            className="w-full py-3.5 clip-corner bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan font-sans font-bold text-sm tracking-widest hover:bg-neon-cyan/20 hover:shadow-neon-cyan transition-all duration-300"
            onClick={handleReplay}
          >
            ⚡ REJOUER
          </button>
          <button
            className="w-full py-3.5 clip-corner bg-neon-pink/10 border border-neon-pink/30 text-neon-pink font-sans font-bold text-sm tracking-widest hover:bg-neon-pink/20 hover:shadow-neon-pink transition-all duration-300"
            onClick={handleChangeCategory}
          >
            📚 CATÉGORIES
          </button>
          <button
            className="w-full py-3 border border-cyber-border text-white/30 hover:text-white/60 hover:border-white/20 font-mono text-sm tracking-wider transition-all duration-300"
            onClick={handleHome}
          >
            ‹ ACCUEIL
          </button>
        </div>
      </div>
    </div>
  );
}

export default Results;
