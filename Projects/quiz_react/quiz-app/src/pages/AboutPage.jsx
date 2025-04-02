import { motion } from 'framer-motion';
import DeveloperCard from '../components/DeveloperCard';

const AboutPage = () => {
  return (
    <motion.div 
      className="page-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="card" style={{ maxWidth: '800px' }}>
        <h1 className="quiz-title">About Quiz Master</h1>
        
        <p style={{ marginBottom: '1.5rem' }}>
          Quiz Master is an interactive quiz application built with React.js and Vite. 
          It features a beautiful dark theme with gradient colors and smooth animations 
          powered by Framer Motion. Test your knowledge across various categories and difficulty levels!
        </p>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2>Technologies Used</h2>
          <ul style={{ listStyle: 'inside', paddingLeft: '1rem' }}>
            <li>React.js - Frontend library for building user interfaces</li>
            <li>Vite - Next generation frontend tooling</li>
            <li>React Router Dom - Navigation and routing</li>
            <li>Framer Motion - Animation library</li>
            <li>CSS3 with custom variables - Styling with modern CSS features</li>
            <li>JavaScript ES6+ - Modern JavaScript features</li>
          </ul>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h2>Features</h2>
          <ul style={{ listStyle: 'inside', paddingLeft: '1rem' }}>
            <li>7 different quiz categories</li>
            <li>3 difficulty levels (Easy, Medium, Hard)</li>
            <li>Customizable number of questions</li>
            <li>Interactive UI with animations</li>
            <li>Immediate feedback after each question</li>
            <li>Score tracking and detailed results</li>
            <li>Mobile responsive design</li>
          </ul>
        </div>
        
        <DeveloperCard showDetails={true} />
        
        <div className="buttons-container" style={{ marginTop: '2rem' }}>
          <motion.button 
            onClick={() => window.location.href = '/'}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Back to Home
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage; 