import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import './Certifications.css';

const certifications = [
  {
    id: 1,
    title: 'Application Security for Developers and DevOps Professionals',
    issuer: 'Coursera',
    date: 'November 2025',
    description:
      'Successfully completed the Application Security for Developers and DevOps Professionals, covering Secure Coding Practices,Vulnerability Assessments,Vulnerability Scanning,Threat Modeling,Security Testing,Continuous Monitoring,Data Security,Application Performance Management,Open Web Application Security Project (OWASP),Software Development Life Cycle (SDLC) Security and Development Environment Hardening',
    link: 'https://www.coursera.org/account/accomplishments/certificate/CFRX1AMXAZWE',
  },
  {
    id: 2,
    title: 'Artificial Intelligence Launchpad',
    issuer: 'Moringa School',
    date: 'October 2025',
    description:
      'Successfully completed the Artificial Intelligence Launchpad, covering AI Fundamentals (Machine Learning, Deep Learning, NLP), AI Tools (TensorFlow, PyTorch, Scikit-learn), and Responsible AI Practices.',
    link: 'https://moringa.my.salesforce-sites.com/certificateStatus?id=a0PQ200000MtHduMAF',
  },
  {
    id: 3,
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    issuer: 'Amazon Web Services (AWS)',
    date: 'June 2025',
    description: 'Completed the AWS Cloud Foundation Course.',
    link: 'https://www.credly.com/badges/4f87d4a2-80d7-44fc-ae0a-8d04ad75b477/linked_in_profile',
  },
  {
    id: 4,
    title: 'Full Stack Web Development',
    issuer: 'Moringa School',
    date: 'March 2025',
    description: 'Completed intensive training in HTML, CSS, JavaScript, React, Flask, and backend technologies.',
    link: '/Certificates/aron_kipkorir_moringa_software_engineering_cert.png', 
  },
  {
    id: 5,
    title: 'Data Visualization',
    issuer: 'freeCodeCamp',
    date: 'June 2025',
    description: 'Gained skills in D3.js, JSON, and AJAX technologies.',
    link: 'https://www.freecodecamp.org/certification/fcc48dfc922-8d03-480b-a201-002e5d015f2b/data-visualization',
  },
  {
    id: 6,
    title: 'Front End Development Libraries',
    issuer: 'freeCodeCamp',
    date: 'June 2025',
    description: 'Mastered skills in React, Redux, jQuery, Bootstrap, and SASS.',
    link: 'https://www.freecodecamp.org/certification/fcc48dfc922-8d03-480b-a201-002e5d015f2b/front-end-development-libraries',
  },
  {
    id: 7,
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: 'May 2025',
    description: 'Mastered JavaScript Algorithms and Data Structures.',
    link: 'https://www.freecodecamp.org/certification/fcc48dfc922-8d03-480b-a201-002e5d015f2b/javascript-algorithms-and-data-structures-v8',
  },
  {
    id: 8,
    title: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: 'April 2025',
    description: 'Mastered skills in HTML and CSS.',
    link: 'https://www.freecodecamp.org/certification/fcc48dfc922-8d03-480b-a201-002e5d015f2b/responsive-web-design',
  },
  {
    id: 9,
    title: 'Bachelor of Science in Nursing',
    issuer: 'Daystar University',
    date: 'November 2023',
    description: 'Comprehensive Education in Nursing and Healthcare Practices.',
    link: '/Certificates/Degree Certificate.pdf',
  },
];

const CertificationsPage = () => {
  const { darkMode } = useContext(ThemeContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className={`certifications ${darkMode ? 'dark' : ''}`} aria-label="Certifications and Licenses page">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Certifications and Licenses
      </motion.h1>
      <div className="certifications-list">
        {certifications.map((cert) => (
          <motion.div
            key={cert.id}
            className="certification-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
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
              aria-label={`View ${cert.title} certificate`}
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsPage;
