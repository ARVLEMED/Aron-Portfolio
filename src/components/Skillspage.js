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
              <li>Python (Data Science & Backend Development)</li>
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
              <li>Relational Databases</li>
              <li>Stored Procedures</li>
              <li>Transaction Processing</li>
              <li>Data Marts</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Data Analytics & Business Intelligence</h2>
            <ul>
              <li>Data Analysis & Interpretation</li>
              <li>Data Manipulation & Wrangling</li>
              <li>Pandas (Python)</li>
              <li>Jupyter Notebooks</li>
              <li>Exploratory Data Analysis (EDA)</li>
              <li>Statistical Analysis</li>
              <li>Data Quality Management</li>
              <li>Analytics & Reporting</li>
              <li>Information Privacy & Data Ethics</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Big Data & Distributed Systems</h2>
            <ul>
              <li>Big Data Concepts</li>
              <li>Apache Hadoop</li>
              <li>Apache Spark</li>
              <li>Apache Hive</li>
              <li>Data Processing Pipelines</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Artificial Intelligence & Machine Learning</h2>
            <ul>
              <li>Machine Learning</li>
              <li>Deep Learning</li>
              <li>Natural Language Processing (NLP)</li>
              <li>PyTorch</li>
              <li>Scikit-learn</li>
              <li>AI Ethics & Responsible AI Practices</li>
            </ul>
          </section>

        </div>

        {/* Right Side */}
        <div className="skills-right">

          <section className="skills-category">
            <h2>Data Visualization & Dashboards</h2>
            <ul>
              <li>Data Visualization Principles</li>
              <li>Interactive Dashboards</li>
              <li>IBM Cognos Analytics</li>
              <li>Tree Maps</li>
              <li>Scatter Plots</li>
              <li>Histograms</li>
              <li>Data Storytelling</li>
              <li>Dashboard Design & Presentation</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Excel & Spreadsheet Analytics</h2>
            <ul>
              <li>Microsoft Excel (Advanced)</li>
              <li>Pivot Tables & Pivot Charts</li>
              <li>Excel Formulas & Functions</li>
              <li>Data Manipulation</li>
              <li>Data Cleansing</li>
              <li>Google Sheets</li>
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
              <li>AWS (EC2, IAM, Lambda, Elastic Beanstalk)</li>
              <li>Linux Server Administration</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Tools & Platforms</h2>
            <ul>
              <li>Git</li>
              <li>GitHub</li>
              <li>VS Code</li>
              <li>Postman</li>
              <li>Render</li>
              <li>Netlify</li>
              <li>Looker</li>
            </ul>
          </section>

          <section className="skills-category">
            <h2>Soft Skills</h2>
            <ul>
              <li>Analytical and critical thinking</li>
              <li>Effective communication</li>
              <li>Collaboration in cross-functional teams</li>
              <li>Problem-solving mindset</li>
              <li>Time management & prioritization</li>
              <li>Attention to detail</li>
              <li>Data-driven decision making</li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
