import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import './Services.css';


const services = [
  {
    title: 'Web Development',
    description: 'Custom web solutions using React, Python, Flask, and modern technologies.',
  },
  {
    title: 'Healthcare App Development',
    description: 'Building secure, user-friendly apps for healthcare providers and patients.',
  },
  {
    title: 'Software Consulting',
    description: 'Expert advice on software architecture and implementation.',
  },
  {
    title: 'Nursing Technology Integration',
    description: 'Integrating tech solutions to enhance Nursing workflows and patient care.',
  },
  {
    title: 'Database Administration',
    description :'Database Architechture and Development using SQL'
  }
]; 

const ServicesPage = () => {
  const { darkMode } = useContext(ThemeContext);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;