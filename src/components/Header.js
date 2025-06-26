import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import './Header.css';
import logo from '../logo.webp';

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`header ${darkMode ? 'dark' : ''}`} aria-label="Main navigation">
      <div className="logo">
        <img src={logo} alt="Arvle Med Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/" aria-label="Home page">Home</Link></li>
          <li><Link to="/projects" aria-label="Projects page">Projects</Link></li>
          <li><Link to="/resume" aria-label="Resume page">Resume</Link></li>
          <li><Link to="/skills" aria-label="Skills page">Skills</Link></li>
          <li><Link to="/certifications" aria-label="Certifications page">Certifications</Link></li>
          <li><Link to="/services" aria-label="Services page">Services</Link></li>
        </ul>
      </nav>
      <button
        onClick={toggleDarkMode}
        className="btn-toggle"
        aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
    </header>
  );
}

export default Header;
//link for blogs
//<li><Link to="/blog" aria-label="Blog page">Blog</Link></li>