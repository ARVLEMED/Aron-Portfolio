import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import html2pdf from 'html2pdf.js';
import projects from '../data/ProjectsData';
import './Resume.css';

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
        >
          <h2>Professional Summary</h2>
          <p>
            As a dynamic Software Engineer with a blend of healthcare expertise and strong technical acumen, 
            I specialize in developing secure, scalable, and user-centric web applications using Python (Flask), 
            JavaScript (React), and cloud-native technologies. Transitioning from a Registered Nurse (BSc. Nursing, Daystar University), 
            I bring a unique understanding of healthcare systems, security, and data integrity. 
            My hands-on experience spans full-stack development, RESTful APIs, and containerized deployments using Docker and Kubernetes. 
            Recently, I expanded my skill set through Coursera’s <em>Application Security for Developers and DevOps Professionals</em> course, 
            gaining practical knowledge in secure coding, vulnerability scanning, OWASP standards, and threat modeling. 
            I am passionate about DevSecOps, automation, and data-driven development—building technology that enhances both security and impact.
          </p>
        </motion.section>

        {/* ===== Technical Skills ===== */}
        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2>Technical Skills</h2>
          <ul>
            <li><strong>Languages:</strong> JavaScript, Python, SQL, Bash</li>
            <li><strong>Frontend:</strong> HTML, CSS, React, Redux, Tailwind CSS, Bootstrap</li>
            <li><strong>Backend:</strong> Flask, SQLAlchemy, REST APIs, PostgreSQL, SQLite</li>
            <li>
              <strong>Application Security & DevSecOps:</strong> 
              Secure Coding, Vulnerability Scanning, Threat Modeling, 
              Security Testing, Continuous Monitoring, Data Security, 
              OWASP Top 10, Vulnerability Assessments, SDLC Security, 
              Development Environment Hardening
            </li>
            <li>
              <strong>Artificial Intelligence & Machine Learning:</strong> 
              TensorFlow, PyTorch, Scikit-learn, Deep Learning, 
              Natural Language Processing (NLP), AI Ethics, Responsible AI
            </li>
            <li>
              <strong>DevOps & Cloud:</strong> Docker, Kubernetes, Jenkins, Terraform, CI/CD Pipelines, 
              AWS (EC2, IAM, Lambda, Elastic Beanstalk), Linux Server Administration
            </li>
            <li><strong>Tools & Platforms:</strong> Git, GitHub, Postman, Netlify, Render, VS Code</li>
            <li><strong>Development Practices:</strong> Agile, Scrum, TDD, API Design, CI/CD</li>
          </ul>
        </motion.section>

        {/* ===== Projects ===== */}
        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2>Projects</h2>
          <ul className="resume-projects">
            {projects.slice(0, 6).map((project, index) => (
              <li key={index} className="resume-project-item">
                <strong>{project.name}</strong> — {project.technologies.join(', ')}
                <p>{project.description}</p>
              </li>
            ))}
          </ul>
          <p>
            View all projects on{' '}
            <a
              href="https://github.com/ARVLEMED"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>.
          </p>
        </motion.section>

        {/* ===== Soft Skills ===== */}
        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2>Soft Skills</h2>
          <ul>
            <li>Analytical and critical thinking in technical and clinical environments</li>
            <li>Effective communication and collaboration in Agile teams</li>
            <li>Leadership and ownership of end-to-end software projects</li>
            <li>User-focused design and human-centered thinking</li>
            <li>Empathy and feedback-driven mindset</li>
          </ul>
        </motion.section>

        {/* ===== Experience ===== */}
        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2>Experience</h2>

          <p><strong>Coursera</strong> – Application Security for Developers and DevOps Professionals <em>(Nov 2025)</em></p>
          <ul>
            <li>Completed comprehensive training on secure coding, vulnerability scanning, OWASP standards, and threat modeling.</li>
            <li>Gained practical skills in continuous monitoring, vulnerability assessment, and secure software development lifecycle (SDLC).</li>
          </ul>

          <p><strong>Strathmore University / Nairobi DevOps Community</strong> – DevOps & Cloud Native Training <em>(Apr 2025 – Jul 2025)</em></p>
          <ul>
            <li>Hands-on DevOps training covering CI/CD, Docker, Terraform, Jenkins, and Kubernetes.</li>
            <li>Worked with AWS services (EC2, IAM, Lambda, Elastic Beanstalk) and Infrastructure as Code.</li>
          </ul>

          <p><strong>Moringa School</strong> – Artificial Intelligence Launchpad <em>(Sep 2025)</em></p>
          <ul>
            <li>Completed training in ML, DL, and NLP with TensorFlow, PyTorch, and Scikit-learn.</li>
          </ul>

          <p><strong>FreeCodeCamp</strong> – Self-Directed Learning <em>(Mar 2025 – Present)</em></p>
          <ul>
            <li>Completed certifications in Frontend Libraries, JavaScript Algorithms, and Data Visualization.</li>
          </ul>

          <p><strong>Moringa School</strong> – Software Engineering Student <em>(Sep 2024 – Mar 2025)</em></p>
          <ul>
            <li>Built full-stack apps using React, Flask, and PostgreSQL via project-based learning.</li>
          </ul>
        </motion.section>

        {/* ===== Education ===== */}
        <motion.section
          className="resume-section"
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
        >
          <h2>Education</h2>
          <ul>
            <li><strong>Coursera</strong> – Application Security for Developers and DevOps Professionals <em>(Nov 2025)</em></li>
            <li><strong>Moringa School</strong> – Artificial Intelligence Launchpad <em>(Sep 2025)</em></li>
            <li><strong>Moringa School</strong> – Full Stack Web Development <em>(Sep 2024 – Mar 2025)</em></li>
            <li><strong>Strathmore University</strong> – DevOps Certificate <em>(Apr 2025 – Jul 2025)</em></li>
            <li><strong>Daystar University</strong> – BSc. Nursing <em>(Aug 2019 – Nov 2023)</em></li>
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
        <button onClick={handleDownloadPDF} className="download-btn">
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
        <Link to="/">Back to Home</Link>
      </motion.div>
    </div>
  );
};

export default Resume;
