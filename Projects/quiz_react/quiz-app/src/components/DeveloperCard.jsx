import { motion } from 'framer-motion';
import developerImage from '../assets/developer.jpeg';

const DeveloperCard = ({ showDetails = false }) => {
  return (
    <motion.div 
      className="developer-card card"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ maxWidth: '600px' }}
    >
      <h3 style={{ textAlign: 'center' }}>Developer Details</h3>
      
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img 
          src={developerImage} 
          alt="Divyanshu Patel" 
          className="developer-profile-image" 
        />
        
        <div className="developer-details">
          <p className="dev-name"><strong>Name:</strong> Divyanshu Patel</p>
          
          <p className="dev-about">
            <strong>About Me:</strong> A passionate Web Developer and Digital Concept Artist, 
            currently pursuing B.Tech in Computer Science at VIT Chennai. 
            Skilled in frontend development, database management, and networking.
          </p>
          
          <div className="dev-contact">
            <h4>Contact Details:</h4>
            <ul>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:divyanshu.patel2023@vitstudent.ac.in">
                  divyanshu.patel2023@vitstudent.ac.in
                </a>
              </li>
              <li>
                <strong>GitHub:</strong>{" "}
                <a href="https://github.com/divyanshupatel17" target="_blank" rel="noopener noreferrer">
                  github.com/divyanshupatel17
                </a>
              </li>
              <li>
                <strong>LinkedIn:</strong>{" "}
                <a href="https://www.linkedin.com/in/patel-divyanshu" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/patel-divyanshu
                </a>
              </li>
              <li>
                <strong>Instagram:</strong>{" "}
                <a href="https://instagram.com/patel_divyanshu_" target="_blank" rel="noopener noreferrer">
                  @patel_divyanshu_
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DeveloperCard; 