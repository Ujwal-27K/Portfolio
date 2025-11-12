import React from 'react';

const Resume = () => {
  // Replace with your actual resume PDF URL (upload to GitHub, Google Drive, or any CDN)
  const resumeUrl = 'https://your-resume-url.com/resume.pdf';

  return (
    <section id="resume" className="section resume-section">
      <div className="container">
        <h2 className="section-title">Resume</h2>
        <p className="section-subtitle">View and download my resume</p>
        
        <div className="resume-container">
          <div className="resume-viewer">
            <iframe
              src={resumeUrl}
              title="Resume"
              className="resume-iframe"
              frameBorder="0"
            />
          </div>
          
          <div className="resume-actions">
            <a
              href={resumeUrl}
              download="Ujwal_Khairnar_Resume.pdf"
              className="resume-btn download"
            >
              <i className="fas fa-download"></i> Download Resume
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn view"
            >
              <i className="fas fa-external-link-alt"></i> View in New Tab
            </a>
          </div>

          {/* Alternative: Embed resume directly if you don't have PDF URL */}
          {/* <div className="resume-content">
            <div className="resume-header">
              <h3>Ujwal Khairnar</h3>
              <p>Full Stack Developer</p>
              <div className="contact-info">
                <span>📧 ujwal.khairnar.uk@gmail.com</span>
                <span>📱 +91-9822673017</span>
                <span>📍 Pune, Maharashtra</span>
              </div>
            </div>
            
            <div className="resume-section">
              <h4>Education</h4>
              <p><strong>Dr. D Y Patil Institute of Engineering, Management & Research</strong></p>
              <p>Bachelor of Engineering in Computer Engineering | 2021-2025 | CGPA: 8.2</p>
            </div>

            <div className="resume-section">
              <h4>Experience</h4>
              <p><strong>Web Development Intern - Prodigy InfoTech</strong></p>
              <p>Jan 2024 - Present</p>
              <ul>
                <li>Developed responsive web applications using React and Node.js</li>
                <li>Implemented RESTful APIs and integrated with databases</li>
              </ul>
            </div>

            <div className="resume-section">
              <h4>Skills</h4>
              <p>JavaScript, React, Node.js, Express, MongoDB, MySQL, Python, C++, Git, REST APIs</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Resume;
