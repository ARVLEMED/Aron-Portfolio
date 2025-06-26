import React, { useContext } from 'react';
import { FaLinkedin, FaGithub, FaBlog } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import './Footer.css';

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.footer
      className={`footer ${darkMode ? 'dark' : ''}`}
      variants={footerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Footer"
    >
      <p>© 2025 Aron Kipkorir | All Rights Reserved</p>
      <div className="social-section" role="region" aria-label="Social links">
        <p>Follow me on:</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/aron-kipkorir-954423327/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn profile"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href="https://github.com/ARVLEMED"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub profile"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href="https://hashnode.com/@arvlemed"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="Hashnode blog"
          >
            <FaBlog /> Blog
          </a>
        </div>
      </div>
      <div className="contact-section" role="region" aria-label="Contact information">
        <p>Contact me at:</p>
        <div className="contact-info">
          <a href="mailto:varokoaruna81@gmail.com" aria-label="Email contact">varokoaruna81@gmail.com</a> | Phone: +254718813781
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;