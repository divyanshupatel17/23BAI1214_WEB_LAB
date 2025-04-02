import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ResultPage = ({ results }) => {
  const navigate = useNavigate();

  // If no results, redirect to home page
  if (!results || !results.totalQuestions) {
    navigate('/');
    return null;
  }

  const { score, totalQuestions, correctAnswers, wrongAnswers } = results;
  const percentage = Math.round((score / totalQuestions) * 100);

  // Generate a feedback message based on score percentage
  const getFeedbackMessage = () => {
    if (percentage >= 90) return "Excellent! You're a quiz master!";
    if (percentage >= 70) return "Great job! You know your stuff!";
    if (percentage >= 50) return "Good effort! Keep learning!";
    return "Don't worry, practice makes perfect!";
  };

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="card">
        <h1 className="quiz-title">Quiz Results</h1>
        
        <motion.div 
          className="score-animation"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ 
            textAlign: 'center', 
            marginBottom: '2rem',
            fontSize: '3rem',
            fontWeight: 'bold',
            background: `linear-gradient(to right, 
              ${percentage >= 70 ? '#22c55e, #16a34a' : 
                percentage >= 40 ? '#f59e0b, #d97706' : 
                '#ef4444, #dc2626'})`,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {percentage}%
        </motion.div>
        
        <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.25rem' }}>
          {getFeedbackMessage()}
        </p>
        
        <div className="results-summary">
          <div className="result-item">
            <div className="result-value">{totalQuestions}</div>
            <div className="result-label">Total Questions</div>
          </div>
          
          <div className="result-item">
            <div className="result-value">{score}</div>
            <div className="result-label">Your Score</div>
          </div>
          
          <div className="result-item">
            <div className="result-value" style={{ color: 'var(--success-color)' }}>
              {correctAnswers}
            </div>
            <div className="result-label">Correct Answers</div>
          </div>
          
          <div className="result-item">
            <div className="result-value" style={{ color: 'var(--error-color)' }}>
              {wrongAnswers}
            </div>
            <div className="result-label">Wrong Answers</div>
          </div>
        </div>
        
        <div className="buttons-container" style={{ marginTop: '2rem' }}>
          <motion.button 
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            style={{ width: '100%' }}
          >
            Start New Quiz
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultPage; 