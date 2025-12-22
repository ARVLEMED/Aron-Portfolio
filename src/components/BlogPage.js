import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { ThemeContext } from '../App';
import './Blog.css';

const BlogPage = () => {
  const { darkMode } = useContext(ThemeContext);
  const [view, setView] = useState('tech'); // 'tech' or 

  const techBlogs = [
    {
      title: 'Introduction to React for Web Development',
      brief: 'A beginner’s guide to building dynamic web apps with React.',
      url: 'https://arvlemed.hashnode.dev/introduction-to-react-for-web-development',
    },
    {
      title: 'Optimizing Flask APIs for Healthcare',
      brief: 'Best practices for creating efficient APIs using Flask.',
      url: 'https://arvlemed.hashnode.dev/optimizing-flask-apis-for-healthcare',
    },
  ]; // Manually add or edit tech blog entries here

  const healthcareBlogs = [
    {
      title: 'The Truth About Emergency Contraceptives (P2): What Every Woman Should Know',
      content: 'Technology has transformed nursing by improving patient monitoring and record-keeping.',
    },
    
  ]; // Manually add or edit healthcare blog entries here

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className={`blog ${darkMode ? 'dark' : ''}`} aria-label="Blog page">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Blogs
      </motion.h1>
      <div className="blog-toggle">
        <button
          onClick={() => setView('tech')}
          className={`toggle-btn ${view === 'tech' ? 'active' : ''}`}
          aria-label="Switch to tech blogs"
        >
          Tech Blogs
        </button>
        <button
          onClick={() => setView('healthcare')}
          className={`toggle-btn ${view === 'healthcare' ? 'active' : ''}`}
          aria-label="Switch to healthcare blogs"
        >
          Healthcare Blogs
        </button>
      </div>
      {view === 'tech' ? (
        <div className="blog-list" aria-label="Tech blog list">
          {techBlogs.map((blog, index) => (
            <motion.div
              key={index}
              className="blog-card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              role="article"
              aria-label={`Tech blog: ${blog.title}`}
            >
              <h3>{blog.title}</h3>
              <p>{blog.brief}</p>
              <a href={blog.url} target="_blank" rel="noopener noreferrer" className="blog-link">
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="blog-list" aria-label="Healthcare blog list">
          {healthcareBlogs.map((blog, index) => (
            <motion.div
              key={index}
              className="blog-card"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              role="article"
              aria-label={`Healthcare blog: ${blog.title}`}
            >
              <h3>{blog.title}</h3>
              <p>{blog.content}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;