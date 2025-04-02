import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      className="app-footer"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="footer-content">
        <div className="copyright">
          © {new Date().getFullYear()} Quiz Master | Divyanshu Patel
        </div>
        <div className="developer-links">
          <a href="https://github.com/divyanshupatel17" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/patel-divyanshu" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://instagram.com/patel_divyanshu_" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;