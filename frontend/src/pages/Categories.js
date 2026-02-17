import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { API_URL } from "../services/api";

const QUESTION_COUNTS = [20, 30, 40, 50];

function Categories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [questionCount, setQuestionCount] = useState(20);
  const navigate = useNavigate();
  const { dispatch } = useQuiz();

  useEffect(() => {
    fetchCategories();
    // eslint-disable-next-line
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_URL}/api/categories`);
      if (!response.ok) throw new Error("Erreur lors du chargement des catégories");
      const data = await response.json();
      setCategories(data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  const toggleCategory = (categoryId) => {
    setSelectedIds((prev) =>
      prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const selectAll = () => {
    if (selectedIds.length === categories.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(categories.map((c) => c.id));
    }
  };

  const handleStart = () => {
    if (selectedIds.length === 0) return;
    const selected = categories.filter((c) => selectedIds.includes(c.id));
    dispatch({ type: "SET_CATEGORIES", payload: selected });
    dispatch({ type: "SET_QUESTION_COUNT", payload: questionCount });
    // Si une seule catégorie, on la set aussi pour rétro-compatibilité
    if (selected.length === 1) {
      dispatch({ type: "SET_CATEGORY", payload: selected[0] });
    } else {
      dispatch({ type: "SET_CATEGORY", payload: { id: "multi", name: selected.map(c => c.name).join(", "), icon: "🎯" } });
    }
    navigate("/quiz/start");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-12 h-12 border-2 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin" />
        <p className="text-white/40 font-mono text-sm tracking-wider">CHARGEMENT...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-5">
        <p className="text-neon-pink font-mono">❌ {error}</p>
        <button
          onClick={fetchCategories}
          className="px-6 py-3 clip-corner bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan font-sans font-bold tracking-wider hover:bg-neon-cyan/20 hover:shadow-neon-cyan transition-all"
        >
          RÉESSAYER
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-5 py-8 max-w-5xl mx-auto">
      <div className="animate-fade-up">
        <button
          onClick={() => navigate("/")}
          className="text-neon-cyan/50 hover:text-neon-cyan transition-colors mb-6 text-sm font-mono tracking-wider flex items-center gap-2"
        >
          <span className="text-neon-cyan/30">‹</span> RETOUR
        </button>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-1 h-8 bg-neon-cyan" />
          <h1 className="text-2xl md:text-3xl font-bold font-sans tracking-wider text-white">CONFIGURATION</h1>
        </div>
        <p className="text-white/30 font-body text-lg ml-4 mb-8">Choisissez vos thèmes et la durée de la partie</p>
      </div>

      {/* Section Catégories */}
      <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-sm font-sans font-bold tracking-widest text-white/50 flex items-center gap-2">
            <span className="w-2 h-2 bg-neon-pink" />
            THÈMES
            <span className="text-neon-cyan font-mono text-xs ml-2">
              ({selectedIds.length}/{categories.length})
            </span>
          </h2>
          <button
            onClick={selectAll}
            className="text-xs font-mono tracking-wider px-3 py-1 border border-cyber-border text-white/30 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all"
          >
            {selectedIds.length === categories.length ? "DÉSÉLECTIONNER" : "TOUT SÉLECTIONNER"}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category, i) => {
            const isSelected = selectedIds.includes(category.id);
            return (
              <button
                key={category.id}
                onClick={() => toggleCategory(category.id)}
                style={{ animationDelay: `${i * 0.08}s` }}
                className={`animate-fade-up opacity-0 group relative clip-corner p-6 flex flex-col items-center gap-3 text-center cursor-pointer transition-all duration-300 hover:-translate-y-1 active:scale-[0.97] overflow-hidden border ${
                  isSelected
                    ? "border-neon-cyan/50 bg-neon-cyan/10 shadow-neon-cyan"
                    : "cyber-card hover:border-white/20"
                }`}
              >
                {/* Checkmark */}
                <div className={`absolute top-3 right-3 w-6 h-6 clip-corner border flex items-center justify-center transition-all text-xs font-bold ${
                  isSelected
                    ? "border-neon-cyan bg-neon-cyan/20 text-neon-cyan"
                    : "border-cyber-border bg-cyber-darker text-transparent"
                }`}>
                  ✓
                </div>
                {/* Scanline overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 to-transparent" />
                </div>
                {/* Top accent bar with neon glow */}
                <div
                  className={`absolute top-0 inset-x-0 transition-all ${isSelected ? "h-1" : "h-0.5"} group-hover:h-1 group-hover:shadow-lg`}
                  style={{ backgroundColor: category.color, boxShadow: `0 0 10px ${category.color}40` }}
                />
                <span className={`text-4xl mt-2 transition-transform duration-300 ${isSelected ? "scale-110" : "group-hover:scale-110"}`}>{category.icon}</span>
                <h2 className={`text-lg font-sans font-bold tracking-wider transition-colors ${isSelected ? "text-neon-cyan" : "text-white/90 group-hover:text-neon-cyan"}`}>{category.name}</h2>
                <p className="text-white/30 text-sm font-body">{category.description}</p>
                {/* Corner bracket */}
                <div className={`absolute bottom-2 right-2 w-4 h-4 border-b border-r transition-colors ${isSelected ? "border-neon-cyan/50" : "border-neon-cyan/20 group-hover:border-neon-cyan/50"}`} />
              </button>
            );
          })}
        </div>
      </div>

      {/* Section Nombre de questions */}
      <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
        <h2 className="text-sm font-sans font-bold tracking-widest text-white/50 mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-neon-purple" />
          NOMBRE DE QUESTIONS
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {QUESTION_COUNTS.map((count) => (
            <button
              key={count}
              onClick={() => setQuestionCount(count)}
              className={`relative py-4 clip-corner border transition-all duration-300 font-sans font-bold tracking-widest text-lg hover:scale-105 active:scale-95 ${
                questionCount === count
                  ? "border-neon-purple/50 bg-neon-purple/10 text-neon-purple shadow-[0_0_15px_rgba(176,38,255,0.15)]"
                  : "border-cyber-border bg-cyber-card text-white/40 hover:border-white/20 hover:text-white/60"
              }`}
            >
              <span className="text-2xl">{count}</span>
              <span className="block text-xs font-mono tracking-wider mt-1 opacity-50">QUESTIONS</span>
              {questionCount === count && (
                <div className="absolute top-0 inset-x-0 h-0.5 bg-neon-purple shadow-[0_0_10px_rgba(176,38,255,0.5)]" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Bouton Lancer */}
      <div className="animate-fade-up" style={{ animationDelay: "0.4s" }}>
        <button
          onClick={handleStart}
          disabled={selectedIds.length === 0}
          className={`w-full py-4 clip-corner font-sans font-bold text-lg tracking-widest transition-all duration-300 ${
            selectedIds.length > 0
              ? "bg-neon-cyan/10 border-2 border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/20 hover:shadow-neon-cyan active:scale-[0.98]"
              : "bg-cyber-darker border-2 border-cyber-border text-white/15 cursor-not-allowed"
          }`}
        >
          {selectedIds.length > 0
            ? `⚡ LANCER — ${questionCount} QUESTIONS · ${selectedIds.length} THÈME${selectedIds.length > 1 ? "S" : ""}`
            : "SÉLECTIONNEZ AU MOINS UN THÈME"}
        </button>
      </div>
    </div>
  );
}

export default Categories;
