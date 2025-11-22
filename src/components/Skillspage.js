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
              <li>REST APIs</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Database Management</h2>
            <ul>
              <li>PostgreSQL</li>
              <li>SQLite</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Artificial Intelligence & Machine Learning</h2>
            <ul>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Natural Language Processing (NLP)</li>
              <li>TutorialFlow</li>
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
              <li>Test-Driven Development (TDD)</li>
              <li>Behavior-Driven Development (BDD)</li>
              <li>Microservices</li>
              <li>Cloud-Native Computing</li>
              <li>Agile & DevOps Methodologies</li>
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
              <li>VS Code</li>
              <li>Postman</li>
            </ul>
          </section>

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
              <li>OWASP Guidelines</li>
              <li>SDLC Security</li>
              <li>Development Environment Hardening</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Agile & Scrum</h2>
            <ul>
              <li>Agile Project Management</li>
              <li>Scrum Framework</li>
              <li>Kanban Principles</li>
              <li>Sprint Planning</li>
              <li>Sprint Retrospectives</li>
              <li>Backlog Management</li>
              <li>User Stories</li>
              <li>Workflow Management</li>
              <li>Continuous Improvement</li>
              <li>Team Management & Collaboration</li>
              <li>Performance Measurement</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Soft Skills</h2>
            <ul>
              <li>Analytical and critical thinking in technical and clinical environments</li>
            <li>Effective communication and collaboration in Agile teams</li>
            <li>Interpersonal communications and stakeholder management</li>
            <li>Leadership and ownership of end-to-end software projects</li>
            <li>User-focused design and human-centered thinking</li>
            <li>Empathy and feedback-driven mindset</li>
            <li>Emotional intelligence in team dynamics and user experience design</li>
            <li>Conflict management and constructive problem-solving</li>
            <li>Time management and sprint planning</li>
            <li>Relationship building with cross-functional teams</li>
            <li>Patient-centered care principles applied to user experience</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
