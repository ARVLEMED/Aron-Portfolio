import React from 'react';
import './Skillspage.css';

const SkillsPage = () => {
  return (
    <div className="skills-page">
      <h1>My Skills</h1>
      <div className="skills-container">
        {/* Left Side */}
        <div className="skills-left">
          <section className="skills-category">
            <h2>Programming Languages</h2>
            <ul>
              <li>Python</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>Bash</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Web Technologies</h2>
            <ul>
              <li>React</li>
              <li>Flask</li>
              <li>HTML & CSS</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Database Management</h2>
            <ul>
              <li>PostgreSQL</li>
              <li>SQLite</li>
            </ul>
          </section>

          {/* 🧠 AI & ML Section */}
          <section className="skills-category">
            <h2>Artificial Intelligence & Machine Learning</h2>
            <ul>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Natural Language Processing (NLP)</li>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>Scikit-learn</li>
              <li>AI Ethics and Responsible AI Practices</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>DevOps & Cloud</h2>
            <ul>
              <li>Docker</li>
              <li>Kubernetes</li>
              <li>Jenkins</li>
              <li>Terraform</li>
              <li>CI/CD Pipelines</li>
              <li>AWS EC2</li>
              <li>AWS IAM</li>
              <li>AWS Lambda</li>
              <li>AWS Elastic Beanstalk</li>
              <li>Infrastructure as Code</li>
              <li>Linux Server Administration</li>
            </ul>
          </section>
        </div>

        {/* Right Side */}
        <div className="skills-right">
          <section className="skills-category">
            <h2>Tools & Platforms</h2>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>Render</li>
              <li>Netlify</li>
              <li>Visual Studio Code</li>
              <li>Postman</li>
            </ul>
          </section>

          {/* 🛡️ Application Security Section */}
          <section className="skills-category">
            <h2>Application Security</h2>
            <ul>
              <li>Secure Coding Practices</li>
              <li>Vulnerability Assessments</li>
              <li>Vulnerability Scanning</li>
              <li>Threat Modeling</li>
              <li>Security Testing</li>
              <li>Continuous Monitoring</li>
              <li>Data Security</li>
              <li>Application Performance Management</li>
              <li>Open Web Application Security Project (OWASP)</li>
              <li>Software Development Life Cycle (SDLC) Security</li>
              <li>Development Environment Hardening</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Soft Skills</h2>
            <ul>
              <li>Analytical and Critical Thinking</li>
              <li>Effective Communication</li>
              <li>Creative Problem-Solving</li>
              <li>Leadership and Self-Management</li>
              <li>Project Management</li>
              <li>Teamwork</li>
              <li>Human-Centered Design</li>
              <li>Empathy and Emotional Intelligence</li>
              <li>Agile & Scrum Collaboration</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
