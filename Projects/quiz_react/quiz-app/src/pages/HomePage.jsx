import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DeveloperCard from '../components/DeveloperCard';

const categories = [
  { id: 'general', name: 'General Knowledge' },
  { id: 'science', name: 'Science' },
  { id: 'history', name: 'History' },
  { id: 'geography', name: 'Geography' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'sports', name: 'Sports' },
  { id: 'technology', name: 'Technology' }
];

const difficulties = [
  { id: 'easy', name: 'Easy' },
  { id: 'medium', name: 'Medium' },
  { id: 'hard', name: 'Hard' }
];

const HomePage = ({ setQuizSettings }) => {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    category: '',
    difficulty: '',
    numberOfQuestions: 5
  });
  const [error, setError] = useState('');
  const [numberInputFocused, setNumberInputFocused] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNumberChange = (e) => {
    const value = e.target.value === '' ? '' : parseInt(e.target.value);
    
    if (value === '') {
      setSettings(prev => ({
        ...prev,
        numberOfQuestions: ''
      }));
      return;
    }
    
    if (!isNaN(value)) {
      setSettings(prev => ({
        ...prev,
        numberOfQuestions: value
      }));
      
      if (value > 0 && value <= 5) {
        setError('');
      } else {
        setError('Number of questions must be between 1 and 5');
      }
    }
  };

  const handleNumberFocus = () => {
    setNumberInputFocused(true);
    setSettings(prev => ({
      ...prev,
      numberOfQuestions: ''
    }));
  };

  const handleNumberBlur = () => {
    setNumberInputFocused(false);
    if (settings.numberOfQuestions === '' || isNaN(settings.numberOfQuestions)) {
      setSettings(prev => ({
        ...prev,
        numberOfQuestions: 5
      }));
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!settings.category || !settings.difficulty) {
      setError('Please select both a category and difficulty level');
      return;
    }
    
    const numQuestions = settings.numberOfQuestions === '' ? 5 : parseInt(settings.numberOfQuestions);
    
    if (numQuestions < 1 || numQuestions > 5) {
      setError('Number of questions must be between 1 and 5');
      return;
    }
    
    setQuizSettings({
      ...settings,
      numberOfQuestions: numQuestions
    });
    navigate('/quiz');
  };

  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="card" style={{ maxWidth: '600px' }}>
        <h1 className="quiz-title">Quiz Master</h1>
        <p className="subtitle" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Test your knowledge with our interactive quiz!
        </p>
        
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="category">Select Category:</label>
                <select 
                  id="category" 
                  name="category" 
                  value={settings.category} 
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select a Category --</option>
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="difficulty">Select Difficulty:</label>
                <select 
                  id="difficulty" 
                  name="difficulty" 
                  value={settings.difficulty} 
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select Difficulty --</option>
                  {difficulties.map(difficulty => (
                    <option key={difficulty.id} value={difficulty.id}>
                      {difficulty.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="numberOfQuestions">
                  Number of Questions (1-5):
                </label>
                <input 
                  type="number" 
                  id="numberOfQuestions" 
                  name="numberOfQuestions" 
                  min="1" 
                  max="5" 
                  value={settings.numberOfQuestions}
                  onChange={handleNumberChange}
                  onFocus={handleNumberFocus}
                  onBlur={handleNumberBlur}
                  placeholder="5"
                  required
                />
                {error && <div className="error-message">{error}</div>}
              </div>
              
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{ width: '100%' }}
              >
                Start Quiz
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      
      <DeveloperCard />
    </motion.div>
  );
};

export default HomePage; 