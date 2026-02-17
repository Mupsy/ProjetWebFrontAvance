import React from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

function Home() {
  const navigate = useNavigate();
  const { dispatch } = useQuiz();

  const handleStart = () => {
    dispatch({ type: "RESET_QUIZ" });
    navigate("/categories");
  };

  const handleMultiplayer = () => {
    dispatch({ type: "RESET_MULTIPLAYER" });
    navigate("/multiplayer");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-5 py-10">
      <div className="flex flex-col items-center text-center max-w-lg w-full animate-fade-up">
        {/* Glowing logo */}
        <div className="relative mb-10 animate-float">
          <div className="w-32 h-32 md:w-40 md:h-40 clip-corner bg-gradient-to-br from-neon-cyan/20 to-neon-pink/20 border border-neon-cyan/30 flex items-center justify-center shadow-neon-cyan">
            <span className="text-6xl md:text-7xl drop-shadow-neon-cyan">🧠</span>
          </div>
          <div className="absolute -inset-8 bg-neon-cyan/5 rounded-full blur-3xl -z-10 animate-glow-pulse" />
          {/* Corner decorations */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-neon-cyan/60" />
          <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-neon-pink/60" />
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-neon-pink/60" />
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-neon-cyan/60" />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-black font-sans tracking-wider text-neon-cyan neon-text-cyan mb-2 animate-flicker">
          CULTURE
        </h1>
        <h1 className="text-3xl md:text-5xl font-black font-sans tracking-[0.3em] text-neon-pink neon-text-pink mb-4">
          QUIZ
        </h1>
        <div className="w-48 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent mb-3" />
        <p className="text-white/40 font-body text-lg md:text-xl tracking-wide mb-12">
          [ TESTEZ VOS CONNAISSANCES ]
        </p>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-4 w-full mb-12">
          <button
            onClick={handleStart}
            className="group flex-1 relative flex items-center justify-center gap-3 px-8 py-4 clip-corner bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan font-sans font-bold text-lg tracking-wider hover:bg-neon-cyan/20 hover:shadow-neon-cyan active:scale-[0.97] transition-all duration-300"
          >
            <span className="text-xl">⚡</span>
            SOLO
            <div className="absolute inset-0 bg-neon-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          <button
            onClick={handleMultiplayer}
            className="group flex-1 relative flex items-center justify-center gap-3 px-8 py-4 clip-corner bg-neon-pink/10 border border-neon-pink/40 text-neon-pink font-sans font-bold text-lg tracking-wider hover:bg-neon-pink/20 hover:shadow-neon-pink active:scale-[0.97] transition-all duration-300"
          >
            <span className="text-xl">👥</span>
            MULTI
            <div className="absolute inset-0 bg-neon-pink/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Features */}
        <div className="flex gap-6 md:gap-10 flex-wrap justify-center">
          {[
            { icon: "📚", label: "6 CATÉGORIES", color: "neon-cyan" },
            { icon: "⏱️", label: "30S / QUESTION", color: "neon-pink" },
            { icon: "🏆", label: "10 QUESTIONS", color: "neon-purple" },
          ].map((f, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{f.icon}</span>
              <span className={`text-xs font-mono tracking-wider text-${f.color}/60`}>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
