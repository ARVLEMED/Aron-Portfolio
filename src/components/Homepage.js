// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  

const Home = () => {
  return (
    <div className="home">
      <div className="home-content">
        <h1>Hi, I'm Aron Kipkorir</h1>
        <p>Software Engineer | Full Stack Developer | Healthcare Innovator</p>
        
        <div className="cta-buttons">
          <Link to="/resume" className="btn btn-primary">View My Resume</Link>
          <Link to="/projects" className="btn btn-secondary">See My Projects</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
