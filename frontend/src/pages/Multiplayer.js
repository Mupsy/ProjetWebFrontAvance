import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { connectSocket, getSocket } from "../services/socket";
import { API_URL } from "../services/api";

const QUESTION_COUNTS = [20, 30, 40, 50];

function Multiplayer() {
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();
  const [playerName, setPlayerName] = useState(state.playerName || "");
  const [roomCode, setRoomCode] = useState("");
  const [mode, setMode] = useState(null); // 'create' or 'join'
  const [categories, setCategories] = useState([]);
  const [selectedCategoryIds, setSelectedCategoryIds] = useState([]);
  const [questionCount, setQuestionCount] = useState(20);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigatedAway = useRef(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_URL}/api/categories`);
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.error("Erreur de chargement des catégories:", err);
      }
    };
    fetchCategories();
    navigatedAway.current = false;

    return () => {
      // Ne PAS déconnecter le socket ici, on en a besoin dans le lobby
      const socket = getSocket();
      if (socket) {
        socket.off("room_created");
        socket.off("player_joined");
        socket.off("error_message");
      }
    };
  }, []);

  const handleCreateRoom = () => {
    if (!playerName.trim()) {
      setError("Veuillez entrer votre nom");
      return;
    }
    if (selectedCategoryIds.length === 0) {
      setError("Veuillez sélectionner au moins une catégorie");
      return;
    }

    setError("");
    setLoading(true);
    dispatch({ type: "SET_PLAYER_NAME", payload: playerName.trim() });

    const socket = connectSocket();
    // Clean old listeners
    socket.off("room_created");
    socket.off("error_message");

    socket.on("room_created", ({ roomId, categoryName, players }) => {
      if (navigatedAway.current) return;
      navigatedAway.current = true;
      dispatch({
        type: "SET_ROOM",
        payload: { roomId, isHost: true, categoryName },
      });
      dispatch({ type: "SET_MULTIPLAYER_PLAYERS", payload: players });
      setLoading(false);
      navigate("/multiplayer/lobby");
    });

    socket.on("error_message", ({ message }) => {
      setError(message);
      setLoading(false);
    });

    socket.emit("create_room", {
      playerName: playerName.trim(),
      categoryIds: selectedCategoryIds,
      questionCount,
    });
  };

  const handleJoinRoom = () => {
    if (!playerName.trim()) {
      setError("Veuillez entrer votre nom");
      return;
    }
    if (!roomCode.trim()) {
      setError("Veuillez entrer le code de la room");
      return;
    }

    setError("");
    setLoading(true);
    dispatch({ type: "SET_PLAYER_NAME", payload: playerName.trim() });

    const socket = connectSocket();
    // Clean old listeners
    socket.off("player_joined");
    socket.off("error_message");

    socket.on("player_joined", ({ players, roomId, categoryName }) => {
      if (navigatedAway.current) return;
      navigatedAway.current = true;
      dispatch({
        type: "SET_ROOM",
        payload: { roomId, isHost: false, categoryName },
      });
      dispatch({ type: "SET_MULTIPLAYER_PLAYERS", payload: players });
      setLoading(false);
      navigate("/multiplayer/lobby");
    });

    socket.on("error_message", ({ message }) => {
      setError(message);
      setLoading(false);
    });

    socket.emit("join_room", {
      roomId: roomCode.trim().toUpperCase(),
      playerName: playerName.trim(),
    });
  };

  return (
    <div className="min-h-screen py-8 px-4 animate-fade-in">
      <div className="max-w-lg mx-auto">
        <button
          className="flex items-center gap-2 text-neon-cyan/40 hover:text-neon-cyan transition-colors mb-6 font-mono text-sm tracking-wider"
          onClick={() => navigate("/")}
        >
          <span className="text-neon-cyan/30">‹</span> RETOUR
        </button>

        <div className="text-center mb-8">
          <span className="text-5xl block mb-3">👥</span>
          <h1 className="text-2xl md:text-3xl font-sans font-bold tracking-wider text-neon-pink neon-text-pink mb-2">MULTIJOUEUR</h1>
          <p className="text-white/30 font-body tracking-wide">Affrontez vos amis en temps réel</p>
        </div>

        {/* Name input */}
        <div className="mb-6">
          <label htmlFor="playerName" className="block text-xs font-mono tracking-widest text-white/30 mb-2">
            PSEUDO
          </label>
          <input
            id="playerName"
            type="text"
            placeholder="Entrez votre pseudo..."
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            maxLength={15}
            className="w-full px-4 py-3 clip-corner bg-cyber-card border border-cyber-border text-white font-body placeholder-white/15 focus:border-neon-cyan/40 focus:outline-none focus:shadow-neon-cyan transition-all"
          />
        </div>

        {/* Mode selection */}
        {!mode && (
          <div className="flex flex-col gap-3 mb-6">
            <button
              className="w-full py-4 clip-corner bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan font-sans font-bold tracking-widest hover:bg-neon-cyan/20 hover:shadow-neon-cyan transition-all duration-300 animate-fade-up"
              onClick={() => setMode("create")}
            >
              ➕ CRÉER
            </button>
            <button
              className="w-full py-4 clip-corner bg-neon-pink/10 border border-neon-pink/30 text-neon-pink font-sans font-bold tracking-widest hover:bg-neon-pink/20 hover:shadow-neon-pink transition-all duration-300 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
              onClick={() => setMode("join")}
            >
              🔗 REJOINDRE
            </button>
          </div>
        )}

        {/* Create room */}
        {mode === "create" && (
          <div className="animate-fade-up">
            <h2 className="text-sm font-sans font-bold tracking-widest text-white/50 mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-neon-pink" />
              THÈMES
              <span className="text-neon-cyan font-mono text-xs ml-2">
                ({selectedCategoryIds.length}/{categories.length})
              </span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
              {categories.map((cat) => {
                const isSelected = selectedCategoryIds.includes(cat.id);
                return (
                  <button
                    key={cat.id}
                    className={`relative flex flex-col items-center gap-1 py-3 px-2 clip-corner border transition-all duration-300 text-sm font-body font-semibold ${
                      isSelected
                        ? "border-neon-cyan/50 bg-neon-cyan/10 text-neon-cyan shadow-neon-cyan scale-105"
                        : "border-cyber-border bg-cyber-card text-white/40 hover:border-white/20"
                    }`}
                    onClick={() =>
                      setSelectedCategoryIds((prev) =>
                        prev.includes(cat.id)
                          ? prev.filter((id) => id !== cat.id)
                          : [...prev, cat.id]
                      )
                    }
                  >
                    {isSelected && (
                      <span className="absolute top-1 right-1 text-neon-cyan text-[10px]">✓</span>
                    )}
                    <span className="text-xl">{cat.icon}</span>
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Question count */}
            <h2 className="text-sm font-sans font-bold tracking-widest text-white/50 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 bg-neon-purple" />
              NOMBRE DE QUESTIONS
            </h2>
            <div className="grid grid-cols-4 gap-2 mb-6">
              {QUESTION_COUNTS.map((count) => (
                <button
                  key={count}
                  onClick={() => setQuestionCount(count)}
                  className={`py-3 clip-corner border font-sans font-bold tracking-wider transition-all duration-300 ${
                    questionCount === count
                      ? "border-neon-purple/50 bg-neon-purple/10 text-neon-purple"
                      : "border-cyber-border bg-cyber-card text-white/40 hover:border-white/20"
                  }`}
                >
                  {count}
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-3">
              <button
                className="w-full py-3.5 clip-corner bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan font-sans font-bold tracking-widest hover:bg-neon-cyan/20 hover:shadow-neon-cyan transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={handleCreateRoom}
                disabled={loading || selectedCategoryIds.length === 0}
              >
                {loading ? "CRÉATION..." : `🚀 LANCER — ${questionCount}Q`}
              </button>
              <button
                className="w-full py-3 border border-cyber-border text-white/30 hover:text-white/50 hover:border-white/20 font-mono text-sm tracking-wider transition-all duration-300"
                onClick={() => setMode(null)}
              >
                ANNULER
              </button>
            </div>
          </div>
        )}

        {/* Join room */}
        {mode === "join" && (
          <div className="animate-fade-up">
            <h2 className="text-sm font-sans font-bold tracking-widest text-white/50 mb-4">CODE ROOM</h2>
            <input
              type="text"
              placeholder="AB12CD"
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
              maxLength={6}
              className="w-full px-4 py-4 clip-corner bg-cyber-card border border-cyber-border text-neon-cyan text-center text-3xl font-mono tracking-[0.4em] placeholder-white/10 focus:border-neon-cyan/40 focus:outline-none focus:shadow-neon-cyan transition-all mb-6 neon-text-cyan"
            />
            <div className="flex flex-col gap-3">
              <button
                className="w-full py-3.5 clip-corner bg-neon-pink/10 border border-neon-pink/40 text-neon-pink font-sans font-bold tracking-widest hover:bg-neon-pink/20 hover:shadow-neon-pink transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
                onClick={handleJoinRoom}
                disabled={loading}
              >
                {loading ? "CONNEXION..." : "🔗 REJOINDRE"}
              </button>
              <button
                className="w-full py-3 border border-cyber-border text-white/30 hover:text-white/50 hover:border-white/20 font-mono text-sm tracking-wider transition-all duration-300"
                onClick={() => setMode(null)}
              >
                ANNULER
              </button>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="mt-4 px-4 py-3 clip-corner bg-neon-pink/5 border border-neon-pink/30 text-neon-pink text-sm font-mono text-center animate-shake">
            ⚠ {error}
          </div>
        )}
      </div>
    </div>
  );
}

export default Multiplayer;
