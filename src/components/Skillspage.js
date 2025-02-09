// src/components/SkillsPage.js
import React from 'react';
import './Skillspage.css';

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <h1>My Skills</h1>
      <div className="skills-container">
        {/* Left Side */}
        <div className="skills-left">
          <section className="skills-category">
            <h2>Programming Languages</h2>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Web Technologies</h2>
            <ul>
              <li>React</li>
              <li>Flask</li>
              <li>HTML & CSS</li>
            </ul>
          </section>
          <section className="skills-category">
            <h2>Database Management</h2>
            <ul>
              <li>PostgreSQL</li>
              <li>SQLite</li>
            </ul>
          </section>
        </div>

        {/* Right Side */}
        <div className="skills-right">
          
          <section className="skills-category">
            <h2>Tools & Platforms</h2>
            <ul>
              <li>GitHub</li>
              <li>Render</li>
              <li>Netlify</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Soft Skills</h2>
            <ul>
              <li>Analytical and Critical Thinking</li>
              <li>Effective Communication</li>
              <li>Creative Problem-Solving</li>
              <li>Leadership and Self-Management</li>
              <li>Project Management</li>
              <li>Teamwork</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
