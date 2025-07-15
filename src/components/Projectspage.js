import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import './Projects.css';

const projects = [
  {
    name: 'MediConnect Frontend',
    description: 'Dashboard of MediConnect, a website that connects a patient with an ambulance, giving the client the power to book an ambulance,just like an Uber',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/ARVLEMED/MEDICONNECT-FRONTEND',
    liveDemo: 'https://teal-snickerdoodle-476ffb.netlify.app/',
  },
   {
    name: 'CEMA-TASK Frontend',
    description: 'It is a React-based web application that helps doctors manage client consultations and health programs. It features a client queue for ongoing consultations, detailed consultation forms, and a programs management section. ',
    technologies: ['React', 'CSS', 'Vite','Axios'],
    github: 'https://github.com/ARVLEMED/CEMA-SE-TASK-FRONTEND',
    liveDemo: 'https://cemahospitalsystem.netlify.app/',
  },
  {
    name: 'CEMA-TASK Backend',
    description: 'It is a Flask-based REST API backend for a healthcare management system. It provides functionality for user authentication, client management, consultation tracking, and program enrollment. The API is designed to support a frontend application for healthcare professionals to manage patients (clients), record consultations, and enroll clients in programs. ',
    technologies: ['Flask', 'SQL', 'SQLAlchemy','JWT','RESTful API','Python'],
    github: 'https://github.com/ARVLEMED/CEMA-SE-TASK-BACKEND',
    
  },
  {
    name: 'ED-TECH-SOLUTION-PROJECT-FRONT-END',
    description: "The EdTech App is a web-based platform designed to streamline communication between teachers, parents, and administrators. It enables teachers to upload student results and welfare details, allowing parents to monitor their child's academic performance and well-being in school. ",
    technologies: ['React', 'Redux', 'Tailwind CSS','Axios'],
    github: 'https://github.com/ARVLEMED/ED-TECH-SOLUTION-PROJECT-FRONT-END',
    liveDemo: 'https://byte-force-ed-tech.netlify.app/',
  },
   {
    name: 'ED-TECH-SOLUTION-PROJECT-BACK-END',
    description: 'This is the back-end for an educational technology solution, built with Flask and Python. It provides a RESTful API to manage users, students, teachers, classes, subjects, exams, results, welfare reports, and forms, with features like JWT authentication, soft deletes, and database migrations.',
    technologies: ['Flask', 'SQL', 'SQLAlchemy','JWT','RESTful API','Python'],
    github: 'https://github.com/ARVLEMED/ED-TECH-SOLUTION-PROJECT-BACK-END',
    
  },
  {
    name: 'Health Awareness App Frontend',
    description: 'Frontend of a health awareness app with user-friendly UI and real-time data.',
    technologies: ['React', 'Tailwind CSS', 'Auth0'],
    github: 'https://github.com/ARVLEMED/Health-Awareness-App-Frontend',
    liveDemo: 'https://healthawarenessapp.netlify.app/',
  },
  {
    name: 'Health Awareness App Backend',
    description: 'Backend for a health awareness app, providing APIs for medical data.',
    technologies: ['Flask', 'SQLAlchemy', 'JWT Authentication'],
    github: 'https://github.com/ARVLEMED/Health-Awareness-App-Backend',
    liveDemo: 'https://health-awareness-app-backend-8.onrender.com',
  },
  {
    name: 'Amazon-JS-Project',
    description: 'An interactive replica of the Amazon shopping web page',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/Amazon-JS-Project',
    liveDemo: 'https://arvlemed.github.io/Amazon-JS-Project/',
  },
  {
    name: 'Rock Paper Scissors Game',
    description: 'An interactive Rock Paper Scissors game with randomized results.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/Rock-Paper-Scissors-Project-Game',
    liveDemo: 'https://arvlemed.github.io/Rock-Paper-Scissors-Project-Game/',
  },
  {
    name: 'Todo List Simple JS Project',
    description: 'A simple To-Do List application with task management features.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/Todo-List-Simple-JS-Project',
    liveDemo: 'https://arvlemed.github.io/Todo-List-Simple-JS-Project/',
  },
  {
    name: 'Itothya Website Project',
    description: 'A static website designed for Itothya Agency with contacts and about.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/ARVLEMED/Itothya-Website-Project',
    liveDemo: 'https://arvlemed.github.io/Itothya-Website-Project/',
  },
  {
    name: 'HTML CSS Project',
    description: 'A replica of a Wikipedia Tribute page.',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/HTML-CSS-project',
    liveDemo: 'https://arvlemed.github.io/HTML-CSS-project/',
  },
  {
    name: 'Black Jack',
    description: 'A browser-based Black Jack game documentation with interactive gameplay.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/Black-Jack',
    liveDemo: 'https://arvlemed.github.io/Black-Jack/',
  },
  {
    name: 'Tasklister Mini Project',
    description: 'A task management app that allows users to create and delete tasks.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/phase-1-tasklister-mini-project',
    liveDemo: 'https://arvlemed.github.io/phase-1-tasklister-mini-project/',
  },
  {
    name: 'Menu Project',
    description: 'A simple coffee menu designed for camper cafe.',
    technologies: ['HTML', 'CSS'],
    github: 'https://github.com/ARVLEMED/menu-project/',
    liveDemo: 'https://arvlemed.github.io/menu-project/',
  },
];

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: [1, 1.05, 1], // Heartbeat-like pulse
      transition: {
        duration: 0.8,
        ease: 'easeOut',
        scale: { times: [0, 0.5, 1], duration: 0.6 }, // Single pulse
      },
    },
  };

  return (
    <div className={`projects ${darkMode ? 'dark' : ''}`} aria-label="Projects page">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            role="article"
            aria-label={`Project: ${project.name}`}
          >
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
            <div className="project-links">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                aria-label={`View ${project.name} GitHub repository`}
              >
                🔗 GitHub Repository
              </a>
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="demo-link"
                aria-label={`View ${project.name} live demo`}
              >
                🚀 Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;