import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import './Services.css';

const services = [
  {
    title: 'Full Stack Web Development',
    description: 'Custom web applications using React, Redux, Flask, SQL, Tailwind CSS, and modern web technologies.',
    tools: 'React, Redux, Flask, SQL, Tailwind CSS, Bootstrap, HTML, CSS, JavaScript',
  },
  {
    title: 'Data Analytics & Business Intelligence',
    description: 'Data analysis, visualization, dashboard creation, EDA, and reporting using Excel, IBM Cognos, Python, and SQL.',
    tools: 'Python, SQL, Excel, IBM Cognos, Tableau, Data Visualization, EDA, Dashboards',
  },
  {
    title: 'Healthcare App Development',
    description: 'Designing secure, user-friendly applications for healthcare providers and patients, integrating EMR and clinical workflows.',
    tools: 'EMR, HIPAA Compliance, UI/UX, Flask, React, Healthcare Workflows',
  },
  {
    title: 'AI & Machine Learning Solutions',
    description: 'Building ML and AI models using TensorFlow, PyTorch, Scikit-learn, NLP, and deep learning for predictive insights.',
    tools: 'TensorFlow, PyTorch, Scikit-learn, NLP, Deep Learning, Predictive Modeling',
  },
  {
    title: 'DevOps & Cloud Engineering',
    description: 'Implementing CI/CD pipelines, Docker, Kubernetes, AWS, Terraform, and cloud-native solutions for scalable deployments.',
    tools: 'Docker, Kubernetes, Jenkins, Terraform, AWS, CI/CD, Cloud-Native Computing',
  },
  {
    title: 'Application Security & DevSecOps',
    description: 'Secure coding practices, vulnerability assessments, threat modeling, and continuous monitoring for robust software.',
    tools: 'Secure Coding, OWASP, Threat Modeling, Vulnerability Scanning, SDLC Security',
  },
  {
    title: 'Software Consulting & Architecture',
    description: 'Providing expert guidance on system design, architecture, workflow optimization, and technical strategy.',
    tools: 'System Architecture, Software Design, Workflow Optimization, Technical Strategy',
  },
  {
    title: 'Database Design & Administration',
    description: 'Database architecture, design, optimization, and management using PostgreSQL, SQLite, and relational database principles.',
    tools: 'PostgreSQL, SQLite, SQL, Database Design, Data Modeling, Optimization',
  },
  {
    title: 'Nursing & Healthcare Technology Integration',
    description: 'Leveraging clinical knowledge to implement technology solutions improving patient care and nursing workflows.',
    tools: 'EMR, Healthcare Workflows, Clinical Data Analysis, Patient-Centered Design',
  },
];

const ServicesPage = () => {
  const { darkMode } = useContext(ThemeContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <div className={`services ${darkMode ? 'dark' : ''}`} aria-label="Services page">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Services
      </motion.h1>
      <div className="services-list">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            role="article"
            aria-label={`Service: ${service.title}`}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="tooltip">{service.tools}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
