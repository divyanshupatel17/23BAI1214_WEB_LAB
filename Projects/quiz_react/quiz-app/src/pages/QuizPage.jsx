import { motion } from 'framer-motion';
import Question from '../components/Question';
import useQuiz from '../hooks/useQuiz';

const QuizPage = ({ quizSettings, setQuizResults }) => {
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    selectedAnswer,
    showAnswer,
    isAnswerCorrect,
    progressPercentage,
    loading,
    errorMsg,
    handleAnswerSelect,
    handleNextQuestion,
    checkAnswer,
    score,
    correctAnswers,
    wrongAnswers
  } = useQuiz(quizSettings, setQuizResults);

  if (loading) {
    return (
      <div className="page-container">
        <div className="card" style={{ textAlign: 'center' }}>
          <h2>Loading Questions...</h2>
          <p>Please wait while we prepare your quiz.</p>
        </div>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="page-container">
        <div className="card" style={{ textAlign: 'center' }}>
          <h2>Error</h2>
          <p>{errorMsg}</p>
          <button onClick={() => window.location.href = '/'}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="quiz-header">
        <h2>Question {currentQuestionIndex + 1} of {totalQuestions}</h2>
        <div>
          Category: {quizSettings.category.charAt(0).toUpperCase() + quizSettings.category.slice(1)}
        </div>
      </div>
      
      <div className="quiz-progress">
        <div 
          className="progress-bar" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      <div className="quiz-layout">
        <div className="question-container">
          <Question 
            question={currentQuestion}
            selectedAnswer={selectedAnswer}
            onAnswerSelect={handleAnswerSelect}
            showAnswer={showAnswer}
            isAnswerCorrect={isAnswerCorrect}
          />
          
          <div className="buttons-container">
            {!showAnswer ? (
              <motion.button 
                onClick={checkAnswer}
                disabled={!selectedAnswer}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  width: '100%', 
                  opacity: !selectedAnswer ? 0.7 : 1,
                  cursor: !selectedAnswer ? 'not-allowed' : 'pointer'
                }}
              >
                Check Answer
              </motion.button>
            ) : (
              <motion.button 
                onClick={handleNextQuestion}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: '100%' }}
              >
                {currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'See Results'}
              </motion.button>
            )}
          </div>
        </div>
        
        <div className="stats-sidebar">
          <motion.div 
            className="question-stats sidebar"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="stat-card">
              <div className="stat-value">{score}</div>
              <div className="stat-label">Current Score</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value">{Math.round((score / (currentQuestionIndex + 1)) * 100)}%</div>
              <div className="stat-label">Accuracy</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value" style={{ color: 'var(--success-color)' }}>{correctAnswers}</div>
              <div className="stat-label">Correct</div>
            </div>
            
            <div className="stat-card">
              <div className="stat-value" style={{ color: 'var(--error-color)' }}>{wrongAnswers}</div>
              <div className="stat-label">Wrong</div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuizPage; 