import React from 'react';

const Home = () => {
  return (
    <section id="home" className="section home-section">
      <div className="container">
        <div className="home-content">
          <div className="intro-text">
            <h1 className="greeting">Hi, I'm <span className="highlight">Ujwal Khairnar</span></h1>
            <h2 className="title">Full Stack Developer</h2>
            <p className="description">
              Computer Engineering graduate passionate about building scalable web applications 
              using MERN stack. I love solving problems and creating innovative solutions.
            </p>
            <div className="social-links">
              <a href="https://github.com/ujwal-khairnar" target="_blank" rel="noopener noreferrer" className="social-btn">
                <i className="fab fa-github"></i> GitHub
              </a>
              <a href="https://linkedin.com/in/ujwal-khairnar" target="_blank" rel="noopener noreferrer" className="social-btn">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
              <a href="mailto:ujwal.khairnar.uk@gmail.com" className="social-btn">
                <i className="fas fa-envelope"></i> Email
              </a>
            </div>
          </div>
          <div className="profile-image">
            {/* Replace with your actual profile image URL */}
            <div className="image-placeholder">
              <img 
                src="https://via.placeholder.com/400x400" 
                alt="Ujwal Khairnar" 
                className="profile-pic"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Add Font Awesome CDN in index.html for icons */}
    </section>
  );
};

export default Home;
