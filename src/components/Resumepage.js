// src/pages/Resume.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <header>
        <h1>Aron Kipkorir's Resume</h1>
        <p>Software Engineer | Full Stack Developer | Healthcare Innovator</p>
      </header>

      <section className="resume-section">
        <h2>Professional Summary</h2>
        <p>
          A passionate Software Engineer skilled in Python (with Flask) and JavaScript (including React), with a background in nursing and healthcare. 
          Experienced in building dynamic web applications and delivering effective software solutions. Adept at problem-solving, team-building, and project management, 
          with a track record of creating engaging applications to improve user experience. Currently seeking opportunities where I can leverage my technical expertise and creative problem-solving to drive innovation in healthcare and tech industries.
        </p>
      </section>

      <section className="resume-section">
        <h2>Technical Skills</h2>
        <div className="skills-list">
          <ul>
            <li><strong>Languages:</strong> JavaScript, Python</li>
            <li><strong>Web Technologies:</strong> HTML, CSS, React, Flask, SQLite, PostgreSQL</li>
            <li><strong>Back-end Development:</strong> Flask, Flask-SQLAlchemy</li>
            <li><strong>Version Control:</strong> Git, GitHub</li>
            <li><strong>Database Management:</strong> SQLite, PostgreSQL</li>
            <li><strong>Tools & Platforms:</strong> Netlify, Render, Render</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h2>Soft Skills</h2>
        <ul>
          <li><strong>Analytical & Critical Thinking:</strong> Strong problem-solving and decision-making abilities.</li>
          <li><strong>Effective Communication & Teamwork:</strong> Collaborating efficiently with cross-functional teams to achieve project goals.</li>
          <li><strong>Project Management:</strong> Experience in managing projects from concept to execution, ensuring timely delivery.</li>
          <li><strong>Entrepreneurial Mindset:</strong> Identifying innovative opportunities, managing resources, and driving impact.</li>
          <li><strong>Creative Problem Solving:</strong> Approaching challenges with a unique and inventive mindset.</li>
          <li><strong>Leadership & Self-Management:</strong> Leading teams and projects while maintaining high standards of excellence.</li>
          <li><strong>Human-Centered Design Thinking:</strong> Focusing on building solutions that prioritize user needs.</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Experience</h2>
        <p><strong>Moringa School</strong> – Software Engineering Student <em>(September 2024 – March 2025)</em></p>
        <ul>
          <li>Participated in intensive training focused on Full Stack Web Development, including hands-on project work in HTML, CSS, JavaScript, React, Flask, and back-end technologies.</li>
        </ul>
      </section>

      <section className="resume-section">
        <h2>Education</h2>
        <p><strong>Moringa School</strong> – Full Stack Web Development <em>(September 2024 – March 2025)</em></p>
        <p><strong>Daystar University</strong> – Bachelor of Science in Nursing <em>(August 2019 – November 2023)</em></p>
      </section>

      <section className="resume-section">
        <h2>Team Values</h2>
        <ul>
          <li>Continuous Feedback Culture – Fostering growth through feedback and collaboration.</li>
          <li>Open Communication – Transparent and effective communication at all levels.</li>
          <li>Collaboration-Oriented – Working collectively toward shared goals.</li>
          <li>Diversity & Inclusion – Embracing diversity to enhance creativity and problem-solving.</li>
          <li>Emotional Intelligence – Cultivating empathy, self-awareness, and strong interpersonal skills.</li>
        </ul>
      </section>

      <div className="back-link">
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default Resume;
