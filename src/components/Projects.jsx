import React from 'react';

const Projects = () => {
  // Replace with your actual project data
  const projects = [
    {
      id: 1,
      title: 'MERN E-Commerce Platform',
      description: 'Full-featured e-commerce platform with user authentication, product catalog, shopping cart, and payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe'],
      imageUrl: 'https://via.placeholder.com/400x250', // Replace with your project image URL
      githubUrl: 'https://github.com/ujwal-khairnar/ecommerce-project',
      liveUrl: 'https://your-project-live-url.com',
    },
    {
      id: 2,
      title: 'LeetCode Stats Dashboard',
      description: 'Interactive dashboard to visualize LeetCode statistics using GraphQL API with charts and analytics.',
      technologies: ['React', 'Node.js', 'GraphQL', 'Material-UI', 'Chart.js'],
      imageUrl: 'https://via.placeholder.com/400x250',
      githubUrl: 'https://github.com/ujwal-khairnar/leetcode-dashboard',
      liveUrl: 'https://your-leetcode-dashboard.com',
    },
    {
      id: 3,
      title: 'AI Resume Analyzer',
      description: 'AI-powered resume analyzer that extracts skills, evaluates job-fit, and provides ATS compatibility scores.',
      technologies: ['React', 'Flask', 'OpenAI API', 'Python', 'MongoDB'],
      imageUrl: 'https://via.placeholder.com/400x250',
      githubUrl: 'https://github.com/ujwal-khairnar/resume-analyzer',
      liveUrl: 'https://your-resume-analyzer.com',
    },
    {
      id: 4,
      title: 'Data Analytics Dashboard',
      description: 'Comprehensive data analytics platform with real-time insights and visualization capabilities.',
      technologies: ['React', 'Python', 'Pandas', 'MySQL', 'D3.js'],
      imageUrl: 'https://via.placeholder.com/400x250',
      githubUrl: 'https://github.com/ujwal-khairnar/data-analytics',
      liveUrl: 'https://your-analytics-dashboard.com',
    },
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">Here are some of my recent projects</p>
        
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.imageUrl} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className="fab fa-github"></i> Code
                      </a>
                    )}
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <i className="fas fa-external-link-alt"></i> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
