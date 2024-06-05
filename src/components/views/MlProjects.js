import React from 'react';
import projectMLData from '../../models/projectData';
import '../../styles/views/WebProjects.scss';

const MlProjects = () => {
  return (
    <div className="web-projects-container">
      <h1>Machine Learning Projects Ongoing and Completed</h1>
      {projectMLData.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <div className="project-links">
            <a href={project.frontendLink} target="_blank" rel="noopener noreferrer">Frontend</a>
            <a href={project.backendLink} target="_blank" rel="noopener noreferrer">Backend</a>
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
export default MlProjects;