import React from 'react';

const Skills = () => {
  // Skills with documentation URLs
  const skills = [
    { name: 'React', level: 85, docUrl: 'https://react.dev/' },
    { name: 'JavaScript', level: 90, docUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
    { name: 'Node.js', level: 80, docUrl: 'https://nodejs.org/docs/' },
    { name: 'Express', level: 75, docUrl: 'https://expressjs.com/' },
    { name: 'MongoDB', level: 80, docUrl: 'https://www.mongodb.com/docs/' },
    { name: 'MySQL', level: 75, docUrl: 'https://dev.mysql.com/doc/' },
    { name: 'Python', level: 70, docUrl: 'https://docs.python.org/3/' },
    { name: 'C++', level: 75, docUrl: 'https://cplusplus.com/doc/' },
    { name: 'Redux', level: 70, docUrl: 'https://redux.js.org/' },
    { name: 'Material-UI', level: 80, docUrl: 'https://mui.com/' },
    { name: 'Git', level: 85, docUrl: 'https://git-scm.com/doc' },
    { name: 'REST APIs', level: 85, docUrl: 'https://restfulapi.net/' },
    { name: 'GraphQL', level: 70, docUrl: 'https://graphql.org/learn/' },
    { name: 'Flask', level: 65, docUrl: 'https://flask.palletsprojects.com/' },
    { name: 'HTML/CSS', level: 90, docUrl: 'https://developer.mozilla.org/en-US/docs/Web' },
    { name: 'Tailwind CSS', level: 75, docUrl: 'https://tailwindcss.com/docs' },
  ];

  const handleSkillClick = (docUrl) => {
    window.open(docUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">Click on a skill to view documentation</p>
        
        <div className="skills-container">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-bubble"
              onClick={() => handleSkillClick(skill.docUrl)}
              style={{
                width: `${120 + skill.level * 0.8}px`,
                height: `${120 + skill.level * 0.8}px`,
                animationDelay: `${index * 0.1}s`,
              }}
              title={`Click to view ${skill.name} documentation`}
            >
              <div className="skill-content">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
