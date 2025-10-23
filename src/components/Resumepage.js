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
        margin: [0.2, 0.2, 0.2, 0.2],
        filename: 'Aron_Kipkorir_Resume.pdf',
        html2canvas: { scale: 1.5, useCORS: true },
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
        {/* ===== Professional Summary ===== */}
        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          aria-label="Professional Summary"
        >
          <h2>Professional Summary</h2>
          <p>
            As a dynamic Software Engineer with a unique blend of healthcare expertise and technical proficiency, 
            I specialize in crafting scalable, user-centric web applications using Python (Flask), JavaScript (React), 
            and full-stack technologies. Transitioning from a Registered Nurse (BSc. Nursing, Daystar University), 
            I bring a deep understanding of healthcare workflows to deliver impactful solutions. My hands-on experience 
            includes building responsive web applications, RESTful APIs, and database-driven systems with PostgreSQL, 
            SQLAlchemy, Docker, and Git. I have advanced my expertise through DevOps and Cloud Native training at 
            Strathmore University and recently completed the Artificial Intelligence Launchpad at Moringa School, 
            gaining experience with AI fundamentals, TensorFlow, PyTorch, and Scikit-learn. Passionate about automation, 
            data-driven development, and collaboration, I thrive in fast-paced environments delivering innovative software 
            solutions that bridge technology and real-world needs.
          </p>
        </motion.section>

        {/* ===== Technical Skills ===== */}
        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          aria-label="Technical Skills"
        >
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Languages:</strong> JavaScript, Python, SQL, Bash</li>
            <li><strong>Frontend:</strong> HTML, CSS, React, Redux, Bootstrap</li>
            <li><strong>Backend:</strong> Flask, SQLAlchemy, REST APIs, PostgreSQL, SQLite</li>
            <li>
              <strong>Artificial Intelligence & Machine Learning:</strong> 
              TensorFlow, PyTorch, Scikit-learn, Deep Learning, 
              Natural Language Processing (NLP), AI Ethics, Responsible AI Practices
            </li>
            <li><strong>DevOps & Cloud:</strong> Docker, Kubernetes, Jenkins, Terraform, CI/CD Pipelines, 
              AWS (EC2, IAM, Lambda, Elastic Beanstalk), Infrastructure as Code, Linux Server Administration
            </li>
            <li><strong>Tools & Platforms:</strong> Git, GitHub, Postman, Netlify, Render, Visual Studio Code</li>
            <li><strong>Development Practices:</strong> Agile & Scrum, Test-Driven Development (TDD), 
              API Design, CRUD Operations, Continuous Integration
            </li>
          </ul>
        </motion.section>

        {/* ===== Projects ===== */}
        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          aria-label="Projects"
        >
          <h2>Projects</h2>
          <p><strong>Health Awareness App</strong> – React, Flask, PostgreSQL, JWT</p>
          <ul>
            <li>Built a full-stack health awareness app integrating React (frontend) and Flask (backend).</li>
            <li>Developed REST APIs for handling medical data and user authentication (JWT Authentication).</li>
            <li>Designed and managed a PostgreSQL database for storing medical information securely.</li>
            <li>Applied Agile methodologies for iterative development and continuous improvements.</li>
          </ul>
          <p><strong>Tasklister App</strong> – JavaScript, HTML, CSS, CRUD Operations</p>
          <ul>
            <li>Created a task management application allowing users to add and delete tasks.</li>
            <li>Applied CRUD principles to efficiently handle user interactions and task persistence.</li>
            <li>More projects available on <a href="https://github.com/ARVLEMED">GitHub</a>.</li>
          </ul>
        </motion.section>

        {/* ===== Soft Skills ===== */}
        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          aria-label="Soft Skills"
        >
          <h2>Soft Skills</h2>
          <ul>
            <li>Analytical and critical thinking in technical and clinical environments</li>
            <li>Effective communication and collaboration in Agile teams</li>
            <li>Leadership and ownership of end-to-end software projects</li>
            <li>User-focused design and human-centered thinking</li>
            <li>Empathy, emotional intelligence, and a feedback-driven mindset</li>
            <li>Entrepreneurial mindset for identifying innovative opportunities</li>
          </ul>
        </motion.section>

        {/* ===== Team Values ===== */}
        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          aria-label="Team Values"
        >
          <h2>Team Values</h2>
          <ul>
            <li><strong>Continuous Feedback Culture:</strong> Growth through feedback and collaboration</li>
            <li><strong>Open Communication:</strong> Transparent and clear interactions</li>
            <li><strong>Collaboration-Oriented:</strong> Works collectively toward goals</li>
            <li><strong>Diversity & Inclusion:</strong> Values different perspectives for creativity</li>
            <li><strong>Emotional Intelligence:</strong> Cultivates empathy, self-awareness, and strong interpersonal skills</li>
          </ul>
        </motion.section>

        {/* ===== Experience ===== */}
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
          <p><strong>Moringa School</strong> – Artificial Intelligence Launchpad <em>(Sep 2025)</em></p>
          <ul>
            <li>Completed hands-on training in Machine Learning, Deep Learning, NLP, and AI Tools (TensorFlow, PyTorch, Scikit-learn).</li>
            <li>Gained understanding of AI ethics and responsible AI practices.</li>
          </ul>
          <p><strong>FreeCodeCamp</strong> – Self-Directed Learning <em>(Mar 2025 – Present)</em></p>
          <ul>
            <li>Completed full-stack certifications in Frontend Libraries, JavaScript Algorithms, and Data Visualization.</li>
          </ul>
          <p><strong>Moringa School</strong> – Software Engineering Student <em>(Sep 2024 – Mar 2025)</em></p>
          <ul>
            <li>Hands-on training in React, Flask, and PostgreSQL through project-based learning and peer collaboration.</li>
          </ul>
        </motion.section>

        {/* ===== Education ===== */}
        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          aria-label="Education"
        >
          <h2>Education</h2>
          <ul>
            <li><strong>Moringa School</strong> – Artificial Intelligence Launchpad <em>(Sep 2025)</em></li>
            <li><strong>Moringa School</strong> – Full Stack Web Development <em>(Sep 2024 – Mar 2025)</em></li>
            <li><strong>Daystar University</strong> – BSc. Nursing <em>(Aug 2019 – Nov 2023)</em></li>
            <li><strong>Strathmore University</strong> – DevOps Certificate <em>(Apr 2025 – Jul 2025)</em></li>
          </ul>
        </motion.section>
      </div>

      {/* ===== Download Button ===== */}
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

      {/* ===== Back to Home ===== */}
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
