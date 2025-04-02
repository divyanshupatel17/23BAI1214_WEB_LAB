import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import quizData from '../data/quizData';

const useQuiz = (quizSettings, setQuizResults) => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Track correct and wrong answers
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);

  useEffect(() => {
    loadQuestions();
  }, [quizSettings]);

  const loadQuestions = () => {
    setLoading(true);
    try {
      const { category, difficulty, numberOfQuestions } = quizSettings;
      
      if (!category || !difficulty) {
        setErrorMsg('Please select a category and difficulty level');
        navigate('/');
        return;
      }
      
      // Get questions for selected category and difficulty
      const availableQuestions = quizData[category]?.[difficulty] || [];
      
      if (availableQuestions.length === 0) {
        setErrorMsg('No questions available for the selected category and difficulty');
        navigate('/');
        return;
      }
      
      // Shuffle and limit questions
      const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, Math.min(numberOfQuestions, shuffled.length));
      
      setQuestions(selected);
      setCurrentQuestionIndex(0);
      setScore(0);
      setCorrectAnswers(0);
      setWrongAnswers(0);
      setSelectedAnswer('');
      setShowAnswer(false);
      setIsAnswerCorrect(null);
      setErrorMsg('');
    } catch (error) {
      console.error('Error loading questions:', error);
      setErrorMsg('Failed to load questions. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answer) => {
    if (showAnswer) return; // Prevent changing answer after submission
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedAnswer('');
    setIsAnswerCorrect(null);
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      // End of quiz - navigate to results
      finishQuiz();
    }
  };

  const checkAnswer = () => {
    if (!selectedAnswer) return; // Don't proceed if no answer is selected
    
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    
    setIsAnswerCorrect(isCorrect);
    setShowAnswer(true);
    
    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
      setCorrectAnswers(prev => prev + 1);
    } else {
      setWrongAnswers(prev => prev + 1);
    }
  };

  const finishQuiz = () => {
    // Calculate and save quiz results
    const results = {
      score,
      totalQuestions: questions.length,
      correctAnswers,
      wrongAnswers
    };
    
    setQuizResults(results);
    navigate('/results');
  };

  // Calculate progress percentage
  const progressPercentage = questions.length > 0 
    ? ((currentQuestionIndex + 1) / questions.length) * 100 
    : 0;

  return {
    currentQuestion: questions[currentQuestionIndex],
    questions,
    currentQuestionIndex,
    selectedAnswer,
    score,
    showAnswer,
    isAnswerCorrect,
    loading,
    errorMsg,
    progressPercentage,
    totalQuestions: questions.length,
    correctAnswers,
    wrongAnswers,
    handleAnswerSelect,
    handleNextQuestion,
    checkAnswer,
    finishQuiz
  };
};

export default useQuiz; 