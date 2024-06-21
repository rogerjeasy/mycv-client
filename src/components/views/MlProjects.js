import React from 'react';
import projectMLData from '../../models/projectMLData';
import '../../styles/views/MlProjects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faAws } from '@fortawesome/free-brands-svg-icons';

const openCVIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg';
const jupyterIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg';
const huggingFaceIconUrl = "/images/hugging-face-icon_45201.svg";
const tensorFlowIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg';
const rIconUrl = 'https://www.r-project.org/logo/Rlogo.svg';
const pandasIconUrl = 'https://pandas.pydata.org/static/img/pandas_mark.svg';
const matplotlibIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/0/01/Created_with_Matplotlib-logo.svg';
const seabornIconUrl = 'https://seaborn.pydata.org/_static/logo-wide-lightbg.svg';
const pyTorchIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/1/10/PyTorch_logo_icon.svg';
const scikitLearn = "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
const gitIconUrl = 'https://git-scm.com/images/logos/downloads/Git-Logo-2Color.svg';

const iconMap = {
  Python: faPython,
  AWS: faAws,
  Git: gitIconUrl,
  'OpenCV': openCVIconUrl,
  'Jupyter Notebook': jupyterIconUrl,
  'Hugging Face': huggingFaceIconUrl,
  'TensorFlow': tensorFlowIconUrl,
  'R': rIconUrl,
  'Scikit-learn': scikitLearn,
  'Pandas': pandasIconUrl,
  'Matplotlib': matplotlibIconUrl,
  'Seaborn': seabornIconUrl,
  'PyTorch': pyTorchIconUrl
};

const MlProjects = () => {
  return (
    <div className="ml-projects-container">
      <h1>Machine Learning Projects Ongoing and Completed</h1>
      {projectMLData.map((project, index) => (
        <div key={index} className="project-card">
          <h2>{project.title}</h2>
          <div className="project-description">
            {project.githubLinks.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
          </div>
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
        </div>
      ))}
    </div>
  );
};

export default MlProjects;


