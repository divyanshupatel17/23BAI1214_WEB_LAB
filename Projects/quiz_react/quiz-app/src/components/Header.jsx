import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="app-header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-content">
        <Link to="/" className="logo">
          Quiz Master
        </Link>
        <div className="developer-info">
          <span>By Divyanshu Patel</span>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 