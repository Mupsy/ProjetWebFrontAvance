import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuizProvider } from "./context/QuizContext";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import Multiplayer from "./pages/Multiplayer";
import MultiplayerLobby from "./pages/MultiplayerLobby";
import MultiplayerGame from "./pages/MultiplayerGame";
import MultiplayerResults from "./pages/MultiplayerResults";

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/quiz/start" element={<Quiz />} />
            <Route path="/quiz/:categoryId" element={<Quiz />} />
            <Route path="/results" element={<Results />} />
            <Route path="/multiplayer" element={<Multiplayer />} />
            <Route path="/multiplayer/lobby" element={<MultiplayerLobby />} />
            <Route path="/multiplayer/game" element={<MultiplayerGame />} />
            <Route path="/multiplayer/results" element={<MultiplayerResults />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
