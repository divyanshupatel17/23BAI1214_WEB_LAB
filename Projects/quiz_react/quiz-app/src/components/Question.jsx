import { motion } from 'framer-motion';

const Question = ({ 
  question, 
  selectedAnswer, 
  onAnswerSelect, 
  showAnswer, 
  isAnswerCorrect 
}) => {
  if (!question) return null;

  const getOptionClassName = (option) => {
    let className = 'option';
    
    if (selectedAnswer === option) {
      className += ' selected';
      
      if (showAnswer) {
        if (option === question.correctAnswer) {
          className += ' correct';
        } else {
          className += ' incorrect';
        }
      }
    } else if (showAnswer && option === question.correctAnswer) {
      className += ' correct';
    }
    
    return className;
  };

  return (
    <motion.div 
      className="question-card card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 style={{ marginBottom: '1.5rem' }}>{question.question}</h3>
      
      <ul className="option-list">
        {question.options.map((option, index) => (
          <motion.li 
            key={index}
            whileHover={{ x: 5 }}
            onClick={() => onAnswerSelect(option)}
            className={getOptionClassName(option)}
            style={{
              backgroundColor: showAnswer 
                ? option === question.correctAnswer 
                  ? 'rgba(34, 197, 94, 0.2)' // correct answer
                  : selectedAnswer === option 
                    ? 'rgba(239, 68, 68, 0.2)' // selected wrong answer
                    : 'rgba(30, 41, 59, 0.8)' // unselected
                : 'rgba(30, 41, 59, 0.8)', // default
              borderColor: showAnswer 
                ? option === question.correctAnswer 
                  ? 'var(--success-color)' // correct answer
                  : selectedAnswer === option 
                    ? 'var(--error-color)' // selected wrong answer 
                    : 'var(--border-color)' // unselected
                : selectedAnswer === option 
                  ? 'var(--accent-color)' // selected (not submitted)
                  : 'var(--border-color)' // not selected
            }}
          >
            {option}
            
            {showAnswer && option === question.correctAnswer && (
              <span style={{ 
                float: 'right', 
                color: 'var(--success-color)',
                fontWeight: '600'
              }}>
                ✓ Correct
              </span>
            )}
            
            {showAnswer && selectedAnswer === option && option !== question.correctAnswer && (
              <span style={{ 
                float: 'right', 
                color: 'var(--error-color)',
                fontWeight: '600'
              }}>
                ✗ Incorrect
              </span>
            )}
          </motion.li>
        ))}
      </ul>
      
      {showAnswer && (
        <div style={{ 
          marginTop: '1.5rem', 
          padding: '1rem',
          borderRadius: '8px',
          backgroundColor: isAnswerCorrect 
            ? 'rgba(34, 197, 94, 0.1)' 
            : 'rgba(239, 68, 68, 0.1)',
          color: isAnswerCorrect 
            ? 'var(--success-color)' 
            : 'var(--error-color)'
        }}>
          {isAnswerCorrect 
            ? 'Correct answer! Great job!' 
            : `Sorry, the correct answer is "${question.correctAnswer}"`}
        </div>
      )}
    </motion.div>
  );
};

export default Question;