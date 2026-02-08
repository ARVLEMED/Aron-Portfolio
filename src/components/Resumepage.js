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

  // Resume data
  const resumeData = {
    name: 'Aron Kipkorir',
    title: 'Software Engineer | Full Stack Developer | Data Analytics & Health-Tech Specialist',
    contact: {
      email: 'varokoaruna81@gmail.com',
      phone: '+254 718 813 781',
      location: 'Nairobi, Kenya',
      linkedin: 'https://www.linkedin.com/in/aron-kipkorir-954423327/',
      github: 'https://github.com/ARVLEMED'
    },
    summary: `As a Software Engineer with a strong foundation in Data Analytics, Databases, Cybersecurity, and a clinical background in nursing, I specialize in building secure, scalable, and data-driven applications using Python, SQL, Pandas, Flask, JavaScript (React), containerization (Docker, Kubernetes), and cloud-native technologies. I have hands-on experience in relational databases, transaction processing, stored procedures, SQL-based data analysis, applied cryptography, and secure DevOps practices.

My healthcare background provides deep insight into clinical workflows, patient safety, and health information management—allowing me to design analytics and health-tech solutions that are both technically robust and clinically relevant. I am skilled in Agile & Scrum, DevOps, CI/CD automation, REST API development, data visualization, dashboard storytelling, analytics reporting, and application security.`,
    
    skills: [
      { category: 'Languages', items: ['JavaScript', 'Python', 'SQL', 'Bash'] },
      { category: 'Frontend', items: ['HTML', 'CSS', 'React', 'Redux', 'Tailwind CSS', 'Bootstrap'] },
      { category: 'Backend & Databases', items: ['Flask', 'SQLAlchemy', 'REST APIs', 'PostgreSQL', 'SQLite', 'Relational Databases', 'Stored Procedures', 'Transaction Processing'] },
      { category: 'Data Analytics & Data Science', items: ['SQL for Data Analysis', 'Relational Databases', 'Data Analysis & Interpretation', 'Data Manipulation', 'Pandas', 'Jupyter Notebooks', 'Exploratory Data Analysis (EDA)', 'Statistical Analysis', 'Data Wrangling & Cleansing', 'Analytics Reporting', 'Information Privacy'] },
      { category: 'Data Visualization', items: ['Excel Dashboards', 'IBM Cognos Analytics', 'Pivot Tables & Charts', 'Tree Maps', 'Scatter Plots', 'Histograms', 'Interactive Dashboards', 'Data Storytelling'] },
      { category: 'Big Data Technologies', items: ['Apache Hadoop', 'Apache Spark', 'Apache Hive', 'Big Data Concepts', 'Distributed Data Processing', 'Data Marts'] },
      { category: 'Cybersecurity & Cryptography', items: ['Data Encryption Standard', 'Applied Cryptography', 'Public Key Infrastructure', 'Blockchain', 'Encryption', 'Network Security', 'Data Storage Security', 'Wireless Networks Security', 'Security Engineering', 'Security Management'] },
      { category: 'Containerization & Orchestration', items: ['Docker', 'Kubernetes', 'OpenShift', 'Istio', 'Container Deployment', 'Scalability', 'Cloud-Native Computing', 'Microservices Architecture'] },
      { category: 'Health Informatics & Medical Coding', items: ['Electronic Medical Records (EMR)', 'ICD-10-CM', 'CPT/HCPCS', 'Clinical Documentation', 'Medical Terminology', 'Healthcare Workflow Knowledge', 'Health Information Management', 'Medical Billing Processes', 'Regulatory & Compliance Awareness (HIPAA principles)', 'Anatomy, Physiology & Pathology Knowledge'] },
      { category: 'Application Security & DevSecOps', items: ['Secure Coding', 'Vulnerability Scanning', 'Threat Modeling', 'Security Testing', 'Continuous Monitoring', 'Data Security', 'OWASP Top 10', 'SDLC Security', 'Vulnerability Assessments', 'Development Environment Hardening'] },
      { category: 'AI & Machine Learning', items: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'NLP', 'AI Ethics', 'Responsible AI'] },
      { category: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'CI/CD Pipelines', 'TDD', 'BDD', 'Microservices', 'Cloud-Native Computing', 'AWS EC2', 'IAM', 'Lambda', 'Elastic Beanstalk', 'Linux Server Administration', 'Command-Line Interface', 'Application Deployment'] },
      { category: 'Tools & Platforms', items: ['Git', 'GitHub', 'Postman', 'Netlify', 'Render', 'VS Code', 'Microsoft Excel', 'Google Sheets', 'IBM Cognos Analytics'] },
      { category: 'Development Practices', items: ['Agile', 'Scrum', 'Kanban', 'User Stories', 'Backlog Management', 'Sprint Planning', 'Sprint Retrospectives', 'Continuous Improvement'] }
    ],

    experience: [
      
      {
        company: 'Coursera',
        position: 'Cyber Security: Applied Cryptography',
        period: 'January 2026',
        location: 'Online',
        achievements: [
          'Completed training in applied cryptography, encryption standards, and data security practices',
          'Learned Public Key Infrastructure (PKI), blockchain technology, and cryptographic protocols',
          'Applied security engineering principles to network security, wireless networks, and data storage',
          'Gained expertise in Data Encryption Standard (DES) and modern security management practices'
        ]
      },
      {
        company: 'Coursera',
        position: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
        period: 'January 2026',
        location: 'Online',
        achievements: [
          'Gained hands-on experience in containerization using Docker, Kubernetes, and OpenShift',
          'Learned microservices architecture, container orchestration, and cloud-native application deployment',
          'Worked with Istio service mesh, scalability patterns, and CI/CD integration for containerized apps',
          'Applied command-line interface skills for container management and deployment automation'
        ]
      },
      {
        company: 'Coursera',
        position: 'Databases & SQL for Data Science with Python',
        period: 'January 2026',
        location: 'Online',
        achievements: [
          'Performed SQL-based data analysis using relational databases and complex queries',
          'Worked with transaction processing, stored procedures, and database design concepts',
          'Used Python with Pandas and Jupyter Notebooks for data manipulation and analysis',
          'Applied query languages to extract, analyze, and transform structured data',
          'Integrated SQL workflows with Python-based analytics pipelines'
        ]
      },
      {
        company: 'Coursera',
        position: 'Data Analytics & Visualization Training',
        period: 'December 2025',
        location: 'Online',
        achievements: [
          'Completed hands-on training in data analytics, statistical analysis, and business intelligence workflows',
          'Built Excel-based analytical reports using pivot tables, formulas, data cleansing, and data manipulation',
          'Designed interactive dashboards and visualizations using Excel and IBM Cognos Analytics',
          'Worked with big data concepts and tools including Apache Hadoop, Spark, and Hive',
          'Applied data storytelling techniques to communicate insights clearly and effectively'
        ]
      },
      {
        company: 'Coursera',
        position: 'Introduction to Agile and Scrum',
        period: 'November 2025',
        location: 'Online',
        achievements: [
          'Gained skills in backlog management, user stories, sprint planning, and Agile workflows',
          'Applied Scrum principles including retrospectives, continuous improvement, and team collaboration',
          'Built competencies in Kanban, workflow optimization, and performance measurement'
        ]
      },
      {
        company: 'Coursera',
        position: 'Introduction to DevOps',
        period: 'November 2025',
        location: 'Online',
        achievements: [
          'Built strong foundations in DevOps culture, automation, and cross-functional collaboration',
          'Learned CI/CD, cloud-native computing, microservices, accountability workflows, and delivery pipelines',
          'Practiced TDD, BDD, and performance metrics in modern DevOps environments'
        ]
      },
      {
        company: 'Coursera',
        position: 'Application Security for Developers & DevOps Professionals',
        period: 'November 2025',
        location: 'Online',
        achievements: [
          'Completed training on secure coding, vulnerability scanning, OWASP standards, and threat modeling',
          'Gained hands-on skills in continuous monitoring and secure SDLC practices'
        ]
      },
      {
        company: 'Strathmore University / Nairobi DevOps Community',
        position: 'DevOps & Cloud Native Training',
        period: 'April 2025 - July 2025',
        location: 'Nairobi, Kenya',
        achievements: [
          'Hands-on DevOps training with Docker, Jenkins, Kubernetes, Terraform, and CI/CD systems',
          'Worked with AWS services including EC2, IAM, Lambda, and Elastic Beanstalk'
        ]
      },
      {
        company: 'Moringa School',
        position: 'Artificial Intelligence Launchpad',
        period: 'September 2025',
        location: 'Nairobi, Kenya',
        achievements: [
          'Completed training in ML, DL, NLP, and AI model development using TensorFlow and PyTorch'
        ]
      },
      {
        company: 'FreeCodeCamp',
        position: 'Self-Directed Learning',
        period: 'March 2025 - Present',
        location: 'Online',
        achievements: [
          'Completed certifications in Frontend Libraries, JavaScript Algorithms, Data Visualization, and more'
        ]
      },
      {
        company: 'Moringa School',
        position: 'Software Engineering Student',
        period: 'September 2024 - March 2025',
        location: 'Nairobi, Kenya',
        achievements: [
          'Built full-stack applications using React, Flask, and PostgreSQL'
        ]
      }
    ],

    education: [
      {
        degree: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
        school: 'Coursera',
        period: 'January 2026',
        
      },
      {
        degree: 'Cyber Security: Applied Cryptography',
        school: 'Coursera',
        period: 'January 2026',
        
      },
      {
        degree: 'Databases and SQL for Data Science with Python',
        school: 'Coursera',
        period: 'January 2026'
      },
      {
        degree: 'Introduction to Data Analytics',
        school: 'Coursera',
        period: 'December 2025'
      },
      {
        degree: 'Excel Basics for Data Analysis',
        school: 'Coursera',
        period: 'December 2025'
      },
      {
        degree: 'Data Visualization & Dashboards with Excel and Cognos',
        school: 'Coursera',
        period: 'December 2025'
      },
      {
        degree: 'Introduction to Agile and Scrum',
        school: 'Coursera',
        period: 'November 2025'
      },
      {
        degree: 'Introduction to DevOps',
        school: 'Coursera',
        period: 'November 2025'
      },
      {
        degree: 'Application Security for Developers & DevOps Professionals',
        school: 'Coursera',
        period: 'November 2025'
      },
      {
        degree: 'Medical Certification - Professionalism in Allied Health',
        school: 'Medical Certification',
        period: '2025'
      },
      {
        degree: 'Artificial Intelligence Launchpad',
        school: 'Moringa School',
        period: 'September 2025'
      },
      {
        degree: 'Full Stack Web Development',
        school: 'Moringa School',
        period: 'September 2024 - March 2025'
      },
      {
        degree: 'DevOps Certificate',
        school: 'Strathmore University',
        period: 'April 2025 - July 2025'
      },
      {
        degree: 'BSc. Nursing',
        school: 'Daystar University',
        period: 'August 2019 - November 2023'
      }
    ],

    softSkills: [
      'Analytical and critical thinking in technical and clinical environments',
      'Effective communication and collaboration in Agile teams',
      'Interpersonal communications and stakeholder management',
      'Leadership and ownership of end-to-end software projects',
      'User-focused design and human-centered thinking',
      'Empathy and feedback-driven mindset',
      'Emotional intelligence in team dynamics and user experience design',
      'Conflict management and constructive problem-solving',
      'Time management and sprint planning',
      'Relationship building with cross-functional teams',
      'Patient-centered care principles applied to user experience'
    ]
  };

  const handleDownloadPDF = () => {
    const element = resumeRef.current;
    if (!element) return;
    element.classList.add('pdf-content');
    html2pdf()
      .set({
        margin: [0.3, 0.3, 0.3, 0.3],
        filename: 'Aron_Kipkorir_Software_Engineer_Data_Analytics_Resume.pdf',
        html2canvas: { scale: 2, useCORS: true, letterRendering: true },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
      })
      .from(element)
      .save()
      .finally(() => {
        element.classList.remove('pdf-content');
      });
  };

  return (
    <div className={`resume ${darkMode ? 'dark' : ''}`} aria-label="Resume page">
      <motion.header initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <h1>{resumeData.name}</h1>
        <p className="subtitle">{resumeData.title}</p>
        <div className="contact-info">
          <span>{resumeData.contact.email}</span>
          <span>{resumeData.contact.phone}</span>
          <span>{resumeData.contact.location}</span>
        </div>
        <div className="contact-info">
          <span>{resumeData.contact.linkedin}</span>
          <span>{resumeData.contact.github}</span>
        </div>
      </motion.header>

      <div ref={resumeRef} className="resume-content">
        {/* Professional Summary */}
        <motion.section className="resume-section" variants={sectionVariants} initial="hidden" animate="visible">
          <h2>Professional Summary</h2>
          <p>{resumeData.summary}</p>
        </motion.section>

        {/* Technical Skills */}
        <motion.section className="resume-section" variants={sectionVariants} initial="hidden" animate="visible">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            {resumeData.skills.map((skillCategory, index) => (
              <div key={index} className="skill-category">
                <strong>{skillCategory.category}:</strong> {skillCategory.items.join(', ')}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Projects */}
        <motion.section className="resume-section" variants={sectionVariants} initial="hidden" animate="visible">
          <h2>Key Projects</h2>
          <div className="projects-list">
            {projects.slice(0, 6).map((project, index) => (
              <div key={index} className="project-item">
                <h4>{project.name}</h4>
                <p className="project-tech">{project.technologies.join(', ')}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
          <p className="github-link">
            View all projects on{' '}
            <a href="https://github.com/ARVLEMED" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </motion.section>

        {/* Professional Experience */}
        <motion.section className="resume-section" variants={sectionVariants} initial="hidden" animate="visible">
          <h2>Professional Experience & Training</h2>
          <div className="experience-list">
            {resumeData.experience.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-header">
                  <div>
                    <h4>{exp.position}</h4>
                    <p className="company">{exp.company}</p>
                  </div>
                  <div className="experience-meta">
                    <span className="period">{exp.period}</span>
                    <span className="location">{exp.location}</span>
                  </div>
                </div>
                <ul className="achievements">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Soft Skills */}
        <motion.section className="resume-section" variants={sectionVariants} initial="hidden" animate="visible">
          <h2>Soft Skills</h2>
          <ul className="soft-skills-list">
            {resumeData.softSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </motion.section>

        {/* Education & Certifications */}
        <motion.section className="resume-section" variants={sectionVariants} initial="hidden" animate="visible">
          <h2>Education & Certifications</h2>
          <div className="education-list">
            {resumeData.education.map((edu, index) => (
              <div key={index} className="education-item">
                <strong>{edu.degree}</strong> - {edu.school} <em>({edu.period})</em> 
                
              </div>
            ))}
          </div>
        </motion.section>
      </div>

      <motion.div className="download-section" variants={sectionVariants} initial="hidden" animate="visible">
        <button onClick={handleDownloadPDF} className="download-btn">
          Download Resume (PDF)
        </button>
      </motion.div>

      <motion.div className="back-link" variants={sectionVariants} initial="hidden" animate="visible">
        <Link to="/">Back to Home</Link>
      </motion.div>
    </div>
  );
};

export default Resume;