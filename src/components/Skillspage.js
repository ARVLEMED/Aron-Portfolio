import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import './Skillspage.css';

const SkillsPage = () => {
  const { darkMode } = useContext(ThemeContext);

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Staggered blip effect
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <div className={`skills-page ${darkMode ? 'dark' : ''}`} aria-label="Skills page">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Skills
      </motion.h1>
      <div className="skills-container">
        <div className="skills-left">
          <motion.section
            className="skills-category"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            role="region"
            aria-label="Programming Languages"
          >
            <h2>Programming Languages</h2>
            <ul>
              {['Python', 'JavaScript', 'SQL'].map((skill) => (
                <motion.li key={skill} variants={itemVariants}>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            className="skills-category"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            role="region"
            aria-label="Web Technologies"
          >
            <h2>Web Technologies</h2>
            <ul>
              {['React', 'Flask', 'HTML & CSS'].map((skill) => (
                <motion.li key={skill} variants={itemVariants}>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            className="skills-category"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            role="region"
            aria-label="Database Management"
          >
            <h2>Database Management</h2>
            <ul>
              {['PostgreSQL', 'SQLite'].map((skill) => (
                <motion.li key={skill} variants={itemVariants}>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>

        <div className="skills-right">
          <motion.section
            className="skills-category"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            role="region"
            aria-label="Tools & Platforms"
          >
            <h2>Tools & Platforms</h2>
            <ul>
             {['GitHub', 'Render', 'Netlify'].map((skill) => (
  <motion.li key={skill} variants={itemVariants}>
    {skill}
  </motion.li>
))}

            </ul>
          </motion.section>

          <motion.section
            className="skills-category"
            variants={listVariants}
            initial="hidden"
            animate="visible"
            role="region"
            aria-label="Soft Skills"
          >
            <h2>Soft Skills</h2>
            <ul>
              {[
                'Analytical and Critical Thinking',
                'Effective Communication',
                'Creative Problem-Solving',
                'Leadership and Self-Management',
                'Project Management',
                'Teamwork',
              ].map((skill) => (
                <motion.li key={skill} variants={itemVariants}>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;