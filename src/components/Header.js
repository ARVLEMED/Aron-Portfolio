import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';  
import logo from '../logo.webp'; 

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Arvle Med Logo" />
      </div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/skills">Skills</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
