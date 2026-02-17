import React, { createContext, useContext, useReducer } from "react";

const QuizContext = createContext();

const initialState = {
  selectedCategory: null,
  selectedCategories: [],
  questionCount: 20,
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  answers: [],
  quizFinished: false,
  playerName: "",
  roomId: null,
  isHost: false,
  multiplayerPlayers: [],
  multiplayerQuestion: null,
  multiplayerQuestionIndex: 0,
  multiplayerTotalQuestions: 20,
  multiplayerTimeLeft: 30,
  multiplayerScore: 0,
  multiplayerGameOver: false,
  multiplayerScores: [],
  multiplayerWinner: null,
  multiplayerCategoryName: "",
  answerResult: null,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, selectedCategory: action.payload };

    case "SET_CATEGORIES":
      return { ...state, selectedCategories: action.payload };

    case "SET_QUESTION_COUNT":
      return { ...state, questionCount: action.payload };

    case "SET_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        currentQuestionIndex: 0,
        score: 0,
        answers: [],
        quizFinished: false,
      };

    case "ANSWER_QUESTION":
      return {
        ...state,
        score: action.payload.isCorrect ? state.score + 1 : state.score,
        answers: [
          ...state.answers,
          {
            questionId: action.payload.questionId,
            selected: action.payload.selected,
            correct: action.payload.correct,
            isCorrect: action.payload.isCorrect,
          },
        ],
      };

    case "NEXT_QUESTION":
      const nextIndex = state.currentQuestionIndex + 1;
      return {
        ...state,
        currentQuestionIndex: nextIndex,
        quizFinished: nextIndex >= state.questions.length,
      };

    case "SKIP_QUESTION":
      const skipIndex = state.currentQuestionIndex + 1;
      return {
        ...state,
        answers: [
          ...state.answers,
          {
            questionId: action.payload.questionId,
            selected: null,
            correct: action.payload.correct,
            isCorrect: false,
          },
        ],
        currentQuestionIndex: skipIndex,
        quizFinished: skipIndex >= state.questions.length,
      };

    case "FINISH_QUIZ":
      return { ...state, quizFinished: true };

    case "RESET_QUIZ":
      return {
        ...initialState,
        playerName: state.playerName,
      };

    // Multiplayer actions
    case "SET_PLAYER_NAME":
      return { ...state, playerName: action.payload };

    case "SET_ROOM":
      return {
        ...state,
        roomId: action.payload.roomId,
        isHost: action.payload.isHost,
        multiplayerCategoryName: action.payload.categoryName || state.multiplayerCategoryName,
      };

    case "SET_MULTIPLAYER_PLAYERS":
      return { ...state, multiplayerPlayers: action.payload };

    case "SET_MULTIPLAYER_QUESTION":
      return {
        ...state,
        multiplayerQuestion: action.payload,
        multiplayerQuestionIndex: action.payload.questionIndex,
        multiplayerTotalQuestions: action.payload.totalQuestions,
        multiplayerTimeLeft: action.payload.timeLeft,
        answerResult: null,
      };

    case "SET_MULTIPLAYER_TIMER":
      return { ...state, multiplayerTimeLeft: action.payload };

    case "SET_ANSWER_RESULT":
      return {
        ...state,
        answerResult: action.payload,
        multiplayerScore: action.payload.score,
      };

    case "SET_MULTIPLAYER_GAME_OVER":
      return {
        ...state,
        multiplayerGameOver: true,
        multiplayerScores: action.payload.scores,
        multiplayerWinner: action.payload.winner,
        multiplayerTotalQuestions: action.payload.totalQuestions || state.multiplayerTotalQuestions,
      };

    case "RESET_MULTIPLAYER":
      return {
        ...state,
        roomId: null,
        isHost: false,
        multiplayerPlayers: [],
        multiplayerQuestion: null,
        multiplayerQuestionIndex: 0,
        multiplayerTimeLeft: 30,
        multiplayerScore: 0,
        multiplayerGameOver: false,
        multiplayerScores: [],
        multiplayerWinner: null,
        multiplayerCategoryName: "",
        answerResult: null,
      };

    default:
      return state;
  }
}

export function QuizProvider({ children }) {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz doit être utilisé dans un QuizProvider");
  }
  return context;
}

export default QuizContext;
