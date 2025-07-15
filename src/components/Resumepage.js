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
  element.classList.add('pdf-content'); 
  html2pdf()
    .set({
      margin: [0.3, 0.3, 0.3, 0.3], 
      filename: 'Aron_Kipkorir_Resume.pdf',
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
    })
    .from(element)
    .save()
    .finally(() => {
      element.classList.remove('pdf-content'); 
    });
};

  return (
    <div className={`resume ${darkMode ? 'dark' : ''}`} aria-label="Resume page">
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1>Aron Kipkorir</h1>
        <p>Software Engineer | Full Stack Developer | Healthcare Innovator</p>
      </motion.header>

      <div ref={resumeRef} className="resume-content">
        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          aria-label="Professional Summary"
        >
          <h2>Professional Summary</h2>
          <p>
           As an accomplished and versatile Software Engineer, I specialize in developing robust, scalable web applications with expertise in Python (Flask), JavaScript (React), and full-stack development. My unique background as a Registered Nurse enriches my technical proficiency with a deep understanding of healthcare workflows, enabling me to deliver innovative, user-focused solutions. I excel in designing and implementing responsive web applications, RESTful APIs, and database-driven systems, leveraging tools such as Docker, Git, PostgreSQL, and SQLAlchemy. With a proven ability to bridge technical and domain-specific challenges, I thrive in dynamic environments, consistently delivering high-quality, impactful software solutions.
          </p>
        </motion.section>

        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          aria-label="Technical Skills"
        >
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Languages:</strong> JavaScript, Python, Bash</li>
            <li><strong>Web:</strong> HTML, CSS, React, Flask</li>
            <li><strong>Back-end:</strong> Flask-SQLAlchemy, SQLite, PostgreSQL</li>
            <li><strong>DevOps & Cloud:</strong> Docker, Kubernetes, Jenkins, Terraform, CI/CD, AWS EC2, IAM, Lambda, Elastic Beanstalk</li>
            <li><strong>Tools:</strong> Git, GitHub, Netlify, Render</li>
            <li><strong>Practices:</strong> Agile, Scrum, Linux, Bash Scripting</li>
          </ul>
        </motion.section>

        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          aria-label="Professional Skills"
        >
          <h2>Soft Skills</h2>
          <ul>
            <li>Problem-solving and critical thinking in technical and clinical environments</li>
            <li>Effective communication and collaboration in Agile teams</li>
            <li>Leadership and ownership of end-to-end software projects</li>
            <li>User-focused design and human-centered thinking</li>
            <li>Empathy, emotional intelligence, and a feedback-driven mindset</li>
          </ul>
        </motion.section>

        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          aria-label="Experience"
        >
          <h2>Experience</h2>

          <p><strong>Strathmore University / Nairobi DevOps Community</strong> – DevOps & Cloud Native Training <em>(Apr 2025 – Jul 2025)</em></p>
          <ul>
            <li>Undergoing intensive DevOps training covering CI/CD, Docker, Terraform, Jenkins, and Kubernetes.</li>
            <li>Gained hands-on experience with AWS services including EC2, IAM, Lambda, and Elastic Beanstalk.</li>
            <li>Developed automation skills using Bash scripting and infrastructure-as-code principles.</li>
          </ul>

          <p><strong>freeCodeCamp</strong> – Self-Directed Learning <em>(Mar 2025 – Present)</em></p>
          <ul>
            <li>Completed full stack projects and certifications in Frontend Libraries, JavaScript Algorithms, and APIs.</li>
          </ul>

          <p><strong>Moringa School</strong> – Software Engineering Student <em>(Sep 2024 – Mar 2025)</em></p>
          <ul>
            <li>Hands-on training in React, Flask, and PostgreSQL through project-based learning and peer collaboration.</li>
          </ul>
        </motion.section>

        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          aria-label="Education"
        >
          <h2>Education</h2>
          <ul>
            <li><strong>Moringa School</strong> – Full Stack Web Development <em>(Sep 2024 – Mar 2025)</em></li>
            <li><strong>Daystar University</strong> – BSc. Nursing <em>(Aug 2019 – Nov 2023)</em></li>
            <li><strong>Strathmore University</strong> – DevOps Certificate <em>(Apr 2025 – Jul 2025)</em></li>
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
