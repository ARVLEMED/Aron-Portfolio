import React, { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Homepage';
import Resume from './components/Resumepage';
import SkillsPage from './components/Skillspage';
import Projects from './components/Projectspage';
import CertificationsPage from './components/CertificationsPage';
import BlogPage from './components/BlogPage';
import ServicesPage from './components/ServicesPage';

export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="content flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/services" element={<ServicesPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;