import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'Cyber Security: Applied Cryptography',
    issuer: 'Coursera',
    date: 'January 2026',
    description:
      'Successfully completed training in applied cryptography and security engineering, covering Data Encryption Standard (DES), Public Key Infrastructure (PKI), Blockchain, Encryption Algorithms, Network Security, Data Storage Security, Wireless Networks Security, Security Management, and cryptographic protocols for emerging technologies.',
    link: 'https://www.coursera.org/account/accomplishments/certificate/Y1UT4PKQ3R4L',
  },
  {
    id: 2,
    title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
    issuer: 'Coursera',
    date: 'January 2026',
    description:
      'Completed hands-on training in containerization and orchestration, covering Docker, Kubernetes, OpenShift, Istio, Microservices Architecture, Cloud-Native Computing, CI/CD, Application Deployment, Scalability, Command-Line Interface, and containerization best practices.',
    link: 'https://www.coursera.org/account/accomplishments/certificate/A96064SQLRTJ',
  },
  {
    id: 3,
    title: 'Databases and SQL for Data Science with Python',
    issuer: 'Coursera',
    date: 'January 2026',
    description:
      'Completed hands-on training in SQL and relational databases for data science, covering data analysis, data manipulation, transaction processing, stored procedures, query languages, and database concepts using Python, Pandas, and Jupyter Notebooks.',
    link: 'https://www.coursera.org/account/accomplishments/certificate/SGNPPSD0UUWM',
  },
  {
    id: 4,
    title: 'Introduction to Data Analytics',
    issuer: 'Coursera',
    date: 'December 2025',
    description:
      'Covered data analytics foundations including data analysis, statistical analysis, data marts, relational databases, big data concepts, Apache Hadoop, Apache Spark, Apache Hive, data visualization, and analytics workflows.',
    link: 'https://www.coursera.org/account/accomplishments/certificate/NF7QC1YAVF2H',
  },
  {
    id: 5,
    title: 'Excel Basics for Data Analysis',
    issuer: 'Coursera',
    date: 'December 2025',
    description:
      'Developed strong spreadsheet analytics skills including pivot tables and charts, data cleansing, data wrangling, Excel formulas, data manipulation, data quality, Google Sheets, and information privacy.',
    link: 'https://www.coursera.org/account/accomplishments/certificate/WDRDP6X1PVA2',
  },
  {
    id: 6,
    title: 'Data Visualization & Dashboards with Excel and Cognos',
    issuer: 'Coursera',
    date: 'December 2025',
    description:
      'Built interactive dashboards and visual analytics using Excel and IBM Cognos Analytics, covering treemaps, scatter plots, histograms, dashboard design, data storytelling, and presentation best practices.',
    link: 'https://www.coursera.org/account/accomplishments/certificate/88KEDC5UO9C5',
  },
  {
    id: 7,
    title: 'Medical Billing and Coding Essentials',
    issuer: 'Coursera',
    date: 'December 2025',
    description:
      'Successfully completed Medical Billing and Coding Essentials, covering Insurance, Medical Billing Process, Electronic Medical Record, Professionalism, Pathology, Anatomy, Healthcare Ethics, Physiology, Medical Terminology, Health Care Procedure and Regulation, Professional Development, Health Information Management and Medical Records, Conflict Management, and Medical Coding.',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/651VG13XFW1J',
  },
  {
    id: 8,
    title: 'Introduction to Agile Development and Scrum',
    issuer: 'Coursera',
    date: 'November 2025',
    description:
      'Successfully completed Introduction to Agile Development and Scrum, covering Backlogs, Team Management, Sprint Retrospectives, Continuous Improvement, Performance Measurement, User Stories, Kanban Principles, Agile Project Management, Sprint Planning, Workflow Management, Agile Software Development, and Team Building.',
    link: 'https://www.coursera.org/account/accomplishments/certificate/J1Y0K3ZVGQS1',
  },
  {
    id: 9,
    title: 'Introduction to DevOps',
    issuer: 'Coursera',
    date: 'November 2025',
    description:
      'Successfully completed Introduction to DevOps, covering Performance Metrics, Cross-Functional Collaboration, Culture Transformation, Cloud-Native Computing, Behavior-Driven Development (BDD), CI/CD, Test Driven Development (TDD), Accountability, Agile Methodologies, and Microservices.',
    link: 'https://www.coursera.org/account/accomplishments/certificate/U4IS2CVANF1I',
  },
  {
    id: 10,
    title: 'Application Security for Developers and DevOps Professionals',
    issuer: 'Coursera',
    date: 'November 2025',
    description:
      'Successfully completed Application Security for Developers and DevOps Professionals, covering Secure Coding Practices, Vulnerability Assessments, Threat Modeling, Security Testing, Continuous Monitoring, Data Security, OWASP, SDLC Security, and Development Environment Hardening.',
    link: 'https://www.coursera.org/account/accomplishments/certificate/CFRX1AMXAZWE',
  },
  {
    id: 11,
    title: 'Artificial Intelligence Launchpad',
    issuer: 'Moringa School',
    date: 'October 2025',
    description:
      'Completed training in AI Fundamentals (Machine Learning, Deep Learning, NLP), AI Tools (TensorFlow, PyTorch, Scikit-learn), and Responsible AI principles.',
    link: 'https://moringa.my.salesforce-sites.com/certificateStatus?id=a0PQ200000MtHduMAF',
  },
  {
    id: 12,
    title: 'AWS Academy Graduate - Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'June 2025',
    description: 'Completed foundational AWS Cloud training.',
    link: 'https://www.credly.com/badges/4f87d4a2-80d7-44fc-ae0a-8d04ad75b477/linked_in_profile',
  },
  {
    id: 13,
    title: 'Full Stack Web Development',
    issuer: 'Moringa School',
    date: 'March 2025',
    description:
      'Completed intensive training in HTML, CSS, JavaScript, React, Flask, Databases, Deployment, and Backend APIs.',
    link: '/Certificates/aron_kipkorir_moringa_software_engineering_cert.png',
  },
  {
    id: 14,
    title: 'Data Visualization',
    issuer: 'freeCodeCamp',
    date: 'June 2025',
    description: 'Gained skills in D3.js, JSON APIs, and data-driven design.',
    link: 'https://www.freecodecamp.org/certification/fcc48dfc922-8d03-480b-a201-002e5d015f2b/data-visualization',
  },
  {
    id: 15,
    title: 'Front End Development Libraries',
    issuer: 'freeCodeCamp',
    date: 'June 2025',
    description: 'Mastered React, Redux, Bootstrap, jQuery, and SASS.',
    link: 'https://www.freecodecamp.org/certification/fcc48dfc922-8d03-480b-a201-002e5d015f2b/front-end-development-libraries',
  },
  {
    id: 16,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'May 2025',
    description:
      'Mastered core JavaScript concepts including algorithms, data structures, ES6, functional programming, and OOP.',
    link: 'https://www.freecodecamp.org/certification/fcc48dfc922-8d03-480b-a201-002e5d015f2b/javascript-algorithms-and-data-structures-v8',
  },
  {
    id: 17,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'April 2025',
    description: 'Mastered modern layouts, Flexbox, Grid, and accessibility principles.',
    link: 'https://www.freecodecamp.org/certification/fcc48dfc922-8d03-480b-a201-002e5d015f2b/responsive-web-design',
  },
  {
    id: 18,
    title: 'Bachelor of Science in Nursing',
    issuer: 'Daystar University',
    date: 'November 2023',
    description: 'Comprehensive education in nursing, health sciences, and clinical practice.',
    link: '/Certificates/DegreeCertificate.pdf', 
  },
];

const CertificationsPage = () => {
  const { darkMode } = useContext(ThemeContext);

  const containerVariants = {
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className={`certifications ${darkMode ? 'dark' : ''}`} aria-label="Certifications and Licenses">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certifications & Licenses
      </motion.h1>

      <motion.div
        className="certifications-list"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className="certification-card"
            variants={cardVariants}
            whileHover={{ scale: 1.04 }}
            role="article"
            aria-label={`Certification: ${cert.title}`}
          >
            <h3>{cert.title}</h3>
            <p><strong>Issuer:</strong> {cert.issuer}</p>
            <p><strong>Date:</strong> {cert.date}</p>
            <p>{cert.description}</p>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-link"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CertificationsPage;