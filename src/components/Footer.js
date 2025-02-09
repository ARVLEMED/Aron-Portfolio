// src/components/Footer.js
import React from 'react';
import { FaLinkedin, FaGithub, FaBlog } from 'react-icons/fa'; // Importing social media icons from react-icons
import './Footer.css'; // Assuming you'll create a separate CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Aron Kipkorir | All Rights Reserved</p>
      <p>Follow me on:
        <a href="https://www.linkedin.com/in/aron-kipkorir-954423327/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin /> LinkedIn
        </a> | 
        <a href="https://github.com/ARVLEMED" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub /> GitHub
        </a> |
        <a href="https://hashnode.com/@arvlemed" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaBlog /> Blog
        </a>
      </p>
      <p>Contact me at: <a href="mailto:varokoaruna81@gmail.com">varokoaruna81@gmail.com</a> | Phone: +254718813781</p>
    </footer>
  );
};

export default Footer;
