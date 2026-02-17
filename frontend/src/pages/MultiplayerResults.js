import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { disconnectSocket } from "../services/socket";

function MultiplayerResults() {
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();
  const { multiplayerScores, multiplayerWinner, playerName, multiplayerCategoryName } = state;

  const handlePlayAgain = () => {
    disconnectSocket();
    dispatch({ type: "RESET_MULTIPLAYER" });
    navigate("/multiplayer");
  };

  const handleHome = () => {
    disconnectSocket();
    dispatch({ type: "RESET_MULTIPLAYER" });
    dispatch({ type: "RESET_QUIZ" });
    navigate("/");
  };

  const getMedal = (index) => {
    if (index === 0) return "🥇";
    if (index === 1) return "🥈";
    if (index === 2) return "🥉";
    return `#${index + 1}`;
  };

  const getRowStyle = (index) => {
    if (index === 0) return "border-l-2 border-neon-yellow/50 bg-neon-yellow/5";
    if (index === 1) return "border-l-2 border-white/20 bg-white/[0.02]";
    if (index === 2) return "border-l-2 border-neon-orange/30 bg-neon-orange/5";
    return "border-l-2 border-cyber-border bg-cyber-surface";
  };

  return (
    <div className="min-h-screen py-8 px-4 animate-fade-in">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <span className="text-6xl block mb-3 animate-bounce-in">🏆</span>
          <h1 className="text-2xl md:text-3xl font-sans font-bold tracking-wider text-neon-cyan neon-text-cyan mb-2">RÉSULTATS</h1>
          <p className="text-white/30 font-mono text-sm tracking-wider">{multiplayerCategoryName && multiplayerCategoryName.toUpperCase()}</p>
        </div>

        {/* Winner */}
        {multiplayerWinner && (
          <div className="cyber-card clip-corner p-6 text-center mb-6 animate-fade-up relative overflow-hidden border-neon-yellow/20">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-yellow/5 to-transparent pointer-events-none" />
            <h2 className="text-xl font-sans font-bold tracking-wider text-white relative z-10 mb-2">
              {multiplayerWinner.name === playerName
                ? "⚡ VICTOIRE !"
                : `⚡ ${multiplayerWinner.name.toUpperCase()} GAGNE`}
            </h2>
            <p className="text-neon-yellow font-mono font-bold text-lg tracking-wider relative z-10">
              {multiplayerWinner.score}/{state.multiplayerTotalQuestions}
            </p>
            {/* Corner decorations */}
            <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-neon-yellow/30" />
            <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-neon-yellow/30" />
            <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-neon-yellow/30" />
            <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-neon-yellow/30" />
          </div>
        )}

        {/* Scoreboard */}
        <div className="cyber-card clip-corner p-5 mb-6">
          <h3 className="text-xs font-sans font-bold tracking-widest text-white/40 mb-4">CLASSEMENT</h3>
          <div className="space-y-1.5">
            {multiplayerScores.map((player, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-4 py-3 transition-all ${getRowStyle(index)} ${
                  player.name === playerName ? "ring-1 ring-neon-cyan/20" : ""
                }`}
              >
                <span className="text-xl w-8 text-center">{getMedal(index)}</span>
                <span className="flex-1 font-body font-semibold text-white/80 tracking-wide">
                  {player.name}
                  {player.name === playerName && (
                    <span className="text-neon-cyan text-xs font-mono ml-2">[VOUS]</span>
                  )}
                </span>
                <span className="font-mono font-bold text-white/50">{player.score}/{state.multiplayerTotalQuestions}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <button
            className="w-full py-4 clip-corner bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan font-sans font-bold tracking-widest hover:bg-neon-cyan/20 hover:shadow-neon-cyan transition-all duration-300"
            onClick={handlePlayAgain}
          >
            ⚡ REJOUER
          </button>
          <button
            className="w-full py-3 border border-cyber-border text-white/30 hover:text-white/50 hover:border-white/20 font-mono text-sm tracking-wider transition-all duration-300"
            onClick={handleHome}
          >
            ‹ ACCUEIL
          </button>
        </div>
      </div>
    </div>
  );
}

export default MultiplayerResults;
