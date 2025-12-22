import React, { useContext, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import './Projects.css';
import projects from '../data/ProjectsData';

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);
  const [filter, setFilter] = useState('all');

  /* ------------------ Recruiter-friendly ordering ------------------ */
  const orderedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      if (a.type === 'capstone' && b.type !== 'capstone') return -1;
      if (a.type !== 'capstone' && b.type === 'capstone') return 1;
      return 0;
    });
  }, []);

  /* ------------------ Filter logic ------------------ */
  const filteredProjects = orderedProjects.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'capstone') return project.type === 'capstone';
    if (filter === 'web') return project.technologies?.includes('React');
    if (filter === 'backend') return project.technologies?.includes('Flask');
    return true;
  });

  /* ------------------ Featured Capstone ------------------ */
  const featuredCapstone = orderedProjects.find(
    (project) => project.type === 'capstone'
  );

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
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

      {/* ================= Featured Capstone ================= */}
      {featuredCapstone && (
        <motion.div
          className="project-card capstone"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: '900px', margin: '0 auto 2rem' }}
        >
          <span className="project-category">Featured Capstone</span>
          <h3>{featuredCapstone.name}</h3>
          <p>{featuredCapstone.description}</p>

          <ul className="project-highlights">
            {featuredCapstone.highlights?.map((item, index) => (
              <li key={index}>✔ {item}</li>
            ))}
          </ul>

          <div className="project-links">
            <a
              href={featuredCapstone.link}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-link"
              title="Interactive IBM Cognos dashboard with KPIs and sentiment treemaps"
            >
              📊 View Dashboard
            </a>
          </div>
        </motion.div>
      )}

      {/* ================= Filter Tabs ================= */}
      <div style={{ marginBottom: '1.5rem' }}>
        {['all', 'capstone', 'web', 'backend'].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            style={{
              margin: '0 0.5rem',
              padding: '0.4rem 0.8rem',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: '600',
              background:
                filter === tab ? '#28a745' : darkMode ? '#4a5568' : '#e2e8f0',
              color: filter === tab ? '#fff' : darkMode ? '#e2e8f0' : '#333',
            }}
          >
            {tab.toUpperCase()}
          </button>
        ))}
      </div>

      {/* ================= Projects Grid ================= */}
      <div className="projects-list">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            className={`project-card ${project.type === 'capstone' ? 'capstone' : ''}`}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            role="article"
            aria-label={`Project: ${project.name}`}
            title={
              project.type === 'capstone'
                ? 'Capstone project demonstrating real-world analytics skills'
                : ''
            }
          >
            {project.category && (
              <span className="project-category">{project.category}</span>
            )}

            <h3>{project.name}</h3>
            <p>{project.description}</p>

            <p>
              <strong>Technologies:</strong> {project.technologies.join(', ')}
            </p>

            {project.highlights && (
              <ul className="project-highlights">
                {project.highlights.map((item, i) => (
                  <li key={i}>✔ {item}</li>
                ))}
              </ul>
            )}

            <div className="project-links">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  🔗 GitHub
                </a>
              )}

              {(project.liveDemo || project.link) && (
                <a
                  href={project.liveDemo || project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                  title={
                    project.type === 'capstone'
                      ? 'Interactive analytics dashboard'
                      : 'Live application demo'
                  }
                >
                  🚀 View
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
