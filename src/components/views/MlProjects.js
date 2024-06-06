import React from 'react';
import projectMLData from '../../models/projectMLData';
import '../../styles/views/MlProjects.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faAws } from '@fortawesome/free-brands-svg-icons';

const openCVIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg';
const jupyterIconUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg';
const huggingFaceIconUrl = 'https://cdn-lfs.huggingface.co/repos/96/a2/96a2c8468c1546e660ac2609e49404b8588fcf5a748761fa72c154b2836b4c83/942cad1ccda905ac5a659dfd2d78b344fccfb84a8a3ac3721e08f488205638a0?response-content-disposition=inline%3B+filename*%3DUTF-8%27%27hf-logo.svg%3B+filename%3D%22hf-logo.svg%22%3B&response-content-type=image%2Fsvg%2Bxml&Expires=1717951583&Policy=eyJTdGF0ZW1lbnQiOlt7IkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTcxNzk1MTU4M319LCJSZXNvdXJjZSI6Imh0dHBzOi8vY2RuLWxmcy5odWdnaW5nZmFjZS5jby9yZXBvcy85Ni9hMi85NmEyYzg0NjhjMTU0NmU2NjBhYzI2MDllNDk0MDRiODU4OGZjZjVhNzQ4NzYxZmE3MmMxNTRiMjgzNmI0YzgzLzk0MmNhZDFjY2RhOTA1YWM1YTY1OWRmZDJkNzhiMzQ0ZmNjZmI4NGE4YTNhYzM3MjFlMDhmNDg4MjA1NjM4YTA%7EcmVzcG9uc2UtY29udGVudC1kaXNwb3NpdGlvbj0qJnJlc3BvbnNlLWNvbnRlbnQtdHlwZT0qIn1dfQ__&Signature=j-YpaqlmeDMCkkqE1x6rPPpTngsD1DNBlt34IPVySBQIi58L8PHIefj%7EaFao9z53mZs20PqURwMg4PsYHdsOI%7EN2EIcDXPR59XnEa9utDWVwfB2C3njGCtA9mvCEBkTxeioW0eGXv%7Ebl%7EKPQ-EMjnouA716kTjQOIcHPHOJvVcqFZ%7EhXJ0j8woheetlXG1huEN8yVZEFMH9oCA8jzGMNQINpjSUjHiz6uzJr-8utLXy-p%7EkdYbTwqAdtccb%7EPC8CxW0v5B63TbGoEzoKxrzVfjZ4wgDDxq%7EyZK0TMHQElgUUzcXpVOxVWKiQ0GY24Iyruch%7E0PiP0iIHJB435HLJ%7EA__&Key-Pair-Id=KVTP0A1DKRTAX';
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


