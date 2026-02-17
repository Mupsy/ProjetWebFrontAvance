import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import { getSocket, disconnectSocket } from "../services/socket";

function MultiplayerLobby() {
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();
  const { roomId, isHost, multiplayerPlayers, playerName, multiplayerCategoryName } = state;

  useEffect(() => {
    if (!roomId) {
      navigate("/multiplayer");
      return;
    }

    const socket = getSocket();

    socket.on("player_joined", ({ players }) => {
      dispatch({ type: "SET_MULTIPLAYER_PLAYERS", payload: players });
    });

    socket.on("player_left", ({ players, playerName: leftPlayer }) => {
      dispatch({ type: "SET_MULTIPLAYER_PLAYERS", payload: players });
    });

    socket.on("new_question", (questionData) => {
      dispatch({ type: "SET_MULTIPLAYER_QUESTION", payload: questionData });
      navigate("/multiplayer/game");
    });

    socket.on("error_message", ({ message }) => {
      alert(message);
    });

    return () => {
      socket.off("player_joined");
      socket.off("player_left");
      socket.off("new_question");
      socket.off("error_message");
    };
  }, [roomId, navigate, dispatch]);

  const handleStartGame = () => {
    const socket = getSocket();
    socket.emit("start_game", { roomId });
  };

  const handleLeave = () => {
    disconnectSocket();
    dispatch({ type: "RESET_MULTIPLAYER" });
    navigate("/multiplayer");
  };

  if (!roomId) return null;

  return (
    <div className="min-h-screen py-8 px-4 animate-fade-in">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="text-5xl block mb-3">🏠</span>
          <h1 className="text-2xl md:text-3xl font-sans font-bold tracking-wider text-neon-cyan neon-text-cyan mb-2">LOBBY</h1>
          <p className="text-white/30 font-mono text-sm tracking-wider">
            {multiplayerCategoryName && multiplayerCategoryName.toUpperCase()}
          </p>
        </div>

        {/* Room code */}
        <div className="cyber-card clip-corner p-6 text-center mb-6 relative">
          <p className="text-xs font-mono text-white/30 tracking-widest mb-3">CODE ROOM</p>
          <div className="text-4xl font-mono font-bold tracking-[0.4em] text-neon-cyan neon-text-cyan select-all">
            {roomId}
          </div>
          <p className="text-xs text-white/20 font-body mt-3">Partagez ce code avec vos amis</p>
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-neon-cyan/30" />
          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-neon-cyan/30" />
          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-neon-cyan/30" />
          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-neon-cyan/30" />
        </div>

        {/* Players */}
        <div className="cyber-card clip-corner p-5 mb-6">
          <h2 className="text-xs font-sans font-bold tracking-widest text-white/40 mb-4">
            JOUEURS <span className="text-neon-cyan/40">{multiplayerPlayers.length}/8</span>
          </h2>
          <div className="space-y-2">
            {multiplayerPlayers.map((player, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-4 py-3 bg-cyber-surface border-l-2 border-neon-cyan/20"
              >
                <span className="text-lg">{index === 0 ? "👑" : "👤"}</span>
                <span className="flex-1 font-body font-semibold text-white/80 tracking-wide">
                  {player.name}
                  {player.name === playerName && (
                    <span className="text-neon-cyan text-xs font-mono ml-2">[VOUS]</span>
                  )}
                </span>
                {index === 0 && (
                  <span className="px-2 py-0.5 bg-neon-purple/10 border border-neon-purple/30 text-neon-purple text-xs font-mono tracking-wider">
                    HOST
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          {isHost ? (
            <button
              className="w-full py-4 clip-corner bg-neon-cyan/10 border border-neon-cyan/40 text-neon-cyan font-sans font-bold tracking-widest hover:bg-neon-cyan/20 hover:shadow-neon-cyan transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
              onClick={handleStartGame}
              disabled={multiplayerPlayers.length < 2}
            >
              {multiplayerPlayers.length < 2
                ? "⏳ EN ATTENTE..."
                : "⚡ LANCER"}
            </button>
          ) : (
            <div className="flex items-center justify-center gap-3 py-4 text-white/30 font-mono text-sm tracking-wider">
              <div className="w-4 h-4 border-2 border-neon-cyan/40 border-t-neon-cyan rounded-full animate-spin"></div>
              <p>EN ATTENTE DE L'HÔTE...</p>
            </div>
          )}
          <button
            className="w-full py-3 border border-cyber-border hover:border-neon-pink/30 text-white/30 hover:text-neon-pink font-mono text-sm tracking-wider transition-all duration-300"
            onClick={handleLeave}
          >
            QUITTER
          </button>
        </div>
      </div>
    </div>
  );
}

export default MultiplayerLobby;
