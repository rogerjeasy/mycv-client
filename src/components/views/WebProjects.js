import React from 'react';
import projectsData from '../../models/projectData';
import '../../styles/views/WebProjects.scss';

const WebProjects = () => {
  return (
    <div className="web-projects-container">
      <h1>Web Development Projects Ongoing and Completed</h1>
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <a href={project.projectLink} target="_blank" rel="noopener noreferrer">Live Project</a>
          <div className="project-links">
            <h3>GitHub Repositories:</h3>
            {project.githubLinks.map((link, idx) => (
              <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
                {link.includes('server') ? 'Backend' : 'Frontend'}
              </a>
            ))}
          </div>
          <div className="project-tech-stack">
            <h3>Tech Stack:</h3>
            <ul>
              {project.techStack.map((tech, idx) => (
                <li key={idx}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="project-tasks">
            <h3>Main Tasks Completed:</h3>
            <ul>
              {project.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebProjects;

