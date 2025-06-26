import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import './Projects.css';

const projects = [
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