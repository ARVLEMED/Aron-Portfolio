import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import './Projects.css';
import projects from '../data/ProjectsData';

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

              {/* Only show Live Demo if it exists */}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                  aria-label={`View ${project.name} live demo`}
                >
                  🚀 Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
