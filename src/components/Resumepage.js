import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import './Resume.css';
import html2pdf from 'html2pdf.js';

const Resume = () => {
  const { darkMode } = useContext(ThemeContext);
  const resumeRef = useRef();

  const sectionVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const handleDownloadPDF = () => {
    const element = resumeRef.current;
    html2pdf().set({
      margin: [0.5, 0.5, 0.5, 0.5],
      filename: 'Aron_Kipkorir_Resume.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    }).from(element).save();
  };

  return (
    <div className={`resume ${darkMode ? 'dark' : ''}`} aria-label="Resume page">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Aron Kipkorir's Resume</h1>
        <p>Software Engineer | Full Stack Developer | Healthcare Innovator</p>
      </motion.header>

      <div ref={resumeRef} className="resume-content">
        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          role="region"
          aria-label="Professional Summary"
        >
          <h2>Professional Summary</h2>
          <p>
            I’m a passionate and adaptive Software Engineer with strong skills in Python (Flask), JavaScript (React), and full-stack web development. I bring a unique blend of technology and healthcare expertise, having transitioned from a Registered Nurse to a Software Engineer. My experience spans designing and building responsive web applications, RESTful APIs, and database-driven systems using tools like Docker, Git, PostgreSQL, and SQLAlchemy.</p>

<p>Trained at Moringa School and Strathmore University in liaison with Nairobi DevOps Community , I’ve developed a solid foundation in front-end and back-end development, CI/CD, containerization, and software best practices such as Agile and Scrum. I’m also well-versed in Linux, Bash scripting, and GitHub collaboration.</p>

<p>What sets me apart is my background in healthcare — with hands-on experience in direct patient care, critical thinking, and problem-solving in high-pressure environments. I’m especially passionate about building tech solutions that improve healthcare delivery, education, and community well-being.
          </p>
        </motion.section>

        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          role="region"
          aria-label="Technical Skills"
        >
          <h2>Technical Skills</h2>
          <div className="skills-list">
            <ul>
              <li><strong>Languages:</strong> JavaScript, Python</li>
              <li><strong>Web Technologies:</strong> HTML, CSS, React, Flask, SQLite, PostgreSQL</li>
              <li><strong>Back-end Development:</strong> Flask, Flask-SQLAlchemy</li>
              <li><strong>Version Control:</strong> Git, GitHub</li>
              <li><strong>Database Management:</strong> SQLite, PostgreSQL</li>
              <li><strong>Tools & Platforms:</strong> Netlify, Render</li>
            </ul>
          </div>
        </motion.section>

        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          role="region"
          aria-label="Soft Skills"
        >
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
        </motion.section>

        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          role="region"
          aria-label="Experience"
        >
          <h2>Experience</h2>
          <p><strong>Moringa School</strong> – Software Engineering Student <em>(September 2024 – March 2025)</em></p>
          <ul>
            <li>Participated in intensive training focused on Full Stack Web Development, including hands-on project work in HTML, CSS, JavaScript, React, Flask, and back-end technologies.</li>
          </ul>
        </motion.section>

        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          role="region"
          aria-label="Education"
        >
          <h2>Education</h2>
          <p><strong>Moringa School</strong> – Full Stack Web Development <em>(September 2024 – March 2025)</em></p>
          <p><strong>Daystar University</strong> – Bachelor of Science in Nursing <em>(August 2019 – November 2023)</em></p>
        </motion.section>

        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          role="region"
          aria-label="Team Values"
        >
          <h2>Team Values</h2>
          <ul>
            <li>Continuous Feedback Culture – Fostering growth through feedback and collaboration.</li>
            <li>Open Communication – Transparent and effective communication at all levels.</li>
            <li>Collaboration-Oriented – Working collectively toward shared goals.</li>
            <li>Diversity & Inclusion – Embracing diversity to enhance creativity and problem-solving.</li>
            <li>Emotional Intelligence – Cultivating empathy, self-awareness, and strong interpersonal skills.</li>
          </ul>
        </motion.section>
      </div>

      <motion.div
        className="download-section"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <button onClick={handleDownloadPDF} className="download-btn" aria-label="Download resume as PDF">
          Download Resume (PDF)
        </button>
      </motion.div>

      <motion.div
        className="back-link"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/" aria-label="Back to home">Back to Home</Link>
      </motion.div>
    </div>
  );
};

export default Resume;