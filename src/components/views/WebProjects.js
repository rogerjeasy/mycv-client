import React from 'react';
import projectsData from '../../models/projectData';
import '../../styles/views/WebProjects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faAws, faGithub, faSass, faPython } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const springBootIconUrl = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg';
const expressIconUrl = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg';
const openaiIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/c9/OpenAI_Logo_%282%29.svg';
const gcpIconUrl = 'https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg';
const typescriptIconUrl = 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg';
const firebaseIconUrl = 'https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg';
const javascriptIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg';

const iconMap = {
  React: faReact,
  'Node.js': faNodeJs,
  'Java Spring Boot': springBootIconUrl,
  Javascript: javascriptIconUrl,
  'AWS (S3 and EC2)': faAws,
  MongoDB: faDatabase,
  Firebase: firebaseIconUrl,
  Sass: faSass,
  Express: expressIconUrl,
  OpenAI: openaiIconUrl, 
  'Google Cloud Platform': gcpIconUrl, 
  Typescript: typescriptIconUrl, 
  Python: faPython,
};

const WebProjects = () => {
  return (
    <div className="web-projects-container">
      <h1>Web Development Projects Ongoing and Completed</h1>
      {projectsData.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <a href={project.projectLink} target="_blank" rel="noopener noreferrer">Live Project</a>

          <div className="project-tasks">
            <h3>Main Tasks Completed:</h3>
            <ul>
              {project.tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>

          <div className="project-tech-stack">
            <h3>Tech Stack:</h3>
            <div className="tech-icons">
              {project.techStack.map((tech, idx) => (
                <div key={idx} className="tech-icon">
                  {iconMap[tech] ? (
                    typeof iconMap[tech] === 'string' ? (
                      <img src={iconMap[tech]} alt={tech} className={`custom-icon ${tech === 'OpenAI' ? 'openai-icon' : ''}`} />
                    ) : (
                      <FontAwesomeIcon icon={iconMap[tech]} size="2x" />
                    )
                  ) : null}
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="project-links">
            <h3><FontAwesomeIcon icon={faGithub} size="lg" /> GitHub Repositories:</h3>
            <div className="links">
              {project.githubLinks.map((link, idx) => (
                <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
                  {link.includes('server') ? 'Backend' : 'Frontend'}
                </a>
              )).reduce((prev, curr) => [prev, ' and ', curr])}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebProjects;


