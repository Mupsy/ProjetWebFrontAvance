import React, { useState, useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";
import Timer from "../components/Timer";
import { API_URL } from "../services/api";

function Quiz() {
  const navigate = useNavigate();
  const { state, dispatch } = useQuiz();
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const timerRef = useRef(null);
  const transitionRef = useRef(null);

  // Charger les questions depuis l'API (multi-catégories)
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const categoryIds = state.selectedCategories.map((c) => c.id);
        const count = state.questionCount || 20;

        if (categoryIds.length === 0) {
          navigate("/categories");
          return;
        }

        const response = await fetch(`${API_URL}/api/questions/multi`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ categoryIds, count }),
        });

        if (!response.ok) throw new Error("Erreur lors du chargement des questions");
        const data = await response.json();
        setQuestions(data);
        dispatch({ type: "SET_QUESTIONS", payload: data });
        setLoading(false);
      } catch (err) {
        console.error(err);
        navigate("/categories");
      }
    };
    fetchQuestions();

    return () => {
      clearInterval(timerRef.current);
      clearTimeout(transitionRef.current);
    };
  }, [dispatch, navigate, state.selectedCategories, state.questionCount]);

  // Passer à la question suivante
  const goToNextQuestion = useCallback(() => {
    clearInterval(timerRef.current);
    setSelectedAnswer(null);
    setShowResult(false);
    setTimeLeft(30);
    dispatch({ type: "NEXT_QUESTION" });
  }, [dispatch]);

  // Timer de 30 secondes
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (loading || state.quizFinished) return;

    setTimeLeft(30);
    clearInterval(timerRef.current);

    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          // Temps écoulé → pas de réponse
          const currentQ = questions[state.currentQuestionIndex];
          if (currentQ && !showResult) {
            dispatch({
              type: "SKIP_QUESTION",
              payload: {
                questionId: currentQ.id,
                correct: currentQ.correctAnswer,
              },
            });
            setShowResult(true);
            transitionRef.current = setTimeout(() => {
              setShowResult(false);
              setSelectedAnswer(null);
              setTimeLeft(30);
            }, 800);
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [state.currentQuestionIndex, loading, questions, state.quizFinished]);

  // Rediriger vers les résultats quand le quiz est fini
  useEffect(() => {
    if (state.quizFinished && questions.length > 0) {
      transitionRef.current = setTimeout(() => {
        navigate("/results");
      }, 1000);
    }
  }, [state.quizFinished, navigate, questions.length]);

  const handleAnswer = (answer) => {
    if (selectedAnswer || showResult) return;

    clearInterval(timerRef.current);
    setSelectedAnswer(answer);
    setShowResult(true);

    const currentQuestion = questions[state.currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;

    dispatch({
      type: "ANSWER_QUESTION",
      payload: {
        questionId: currentQuestion.id,
        selected: answer,
        correct: currentQuestion.correctAnswer,
        isCorrect,
      },
    });

    // Passer à la question suivante après 1.5s
    transitionRef.current = setTimeout(() => {
      goToNextQuestion();
    }, 1500);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/40 font-mono text-sm tracking-wider">CHARGEMENT...</p>
        </div>
      </div>
    );
  }

  if (state.quizFinished) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-2 border-neon-pink/20 border-t-neon-pink rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/40 font-mono text-sm tracking-wider">ANALYSE EN COURS...</p>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[state.currentQuestionIndex];
  if (!currentQuestion) return null;

  const getAnswerClass = (answer) => {
    const base = "group flex items-center gap-3 px-5 py-4 clip-corner text-left transition-all duration-300 font-body font-semibold text-base tracking-wide";
    if (!showResult) return `${base} bg-cyber-card border border-cyber-border hover:border-neon-cyan/40 hover:bg-neon-cyan/5 hover:shadow-neon-cyan text-white/80 cursor-pointer`;
    if (answer === currentQuestion.correctAnswer) return `${base} border border-neon-green/50 bg-neon-green/10 text-neon-green shadow-neon-green`;
    if (answer === selectedAnswer && answer !== currentQuestion.correctAnswer)
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
              QUESTION {state.currentQuestionIndex + 1}/{questions.length}
            </span>
            <div className="w-full bg-cyber-surface rounded-none h-1 mt-2 overflow-hidden border border-cyber-border/30">
              <div
                className="h-full bg-gradient-to-r from-neon-cyan to-neon-pink transition-all duration-500"
                style={{
                  width: `${((state.currentQuestionIndex + 1) / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
          <div className="ml-4">
            <Timer timeLeft={timeLeft} total={30} />
          </div>
        </div>

        {/* Score */}
        <div className="text-center mb-4">
          <span className="inline-block cyber-card clip-corner px-5 py-1.5 text-sm font-mono tracking-wider">
            SCORE: <span className="text-neon-cyan neon-text-cyan">{state.score}</span>
            <span className="text-white/30">/{state.currentQuestionIndex + (showResult ? 1 : 0)}</span>
          </span>
        </div>

        {/* Question */}
        <div className="cyber-card clip-corner p-6 mb-6 animate-fade-up relative overflow-hidden scanline-overlay">
          <h2 className="text-lg md:text-xl font-body font-bold text-white text-center leading-relaxed tracking-wide relative z-10">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Answers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {currentQuestion.answers.map((answer, index) => (
            <button
              key={index}
              className={getAnswerClass(answer)}
              onClick={() => handleAnswer(answer)}
              disabled={showResult}
            >
              <span className="w-8 h-8 clip-corner bg-neon-cyan/10 border border-neon-cyan/20 flex items-center justify-center text-xs font-mono font-bold text-neon-cyan shrink-0">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-sm md:text-base">{answer}</span>
            </button>
          ))}
        </div>

        {/* Category badge */}
        {state.selectedCategory && (
          <div className="text-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-mono tracking-wider text-white/40 border border-cyber-border">
              {state.selectedCategory.icon} {state.selectedCategory.name.toUpperCase()}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
