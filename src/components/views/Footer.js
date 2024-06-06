import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import '../../styles/views/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About</h2>
          <p>This portfolio showcases my journey and projects as a PhD student at the University of Zurich, specializing in Machine Learning, Deep Learning, Computer Vision, and Web Development.</p>
        </div>
        <div className="footer-section links">
          <h2>Site map</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/ml_projects">ML Projects</a></li>
            <li><a href="/web_projects">Web Projects</a></li>
            <li><a href="/cv">Full CV</a></li>
            <li><a href="/publications">Publications</a></li>
            <li><a href="/hobbies">Hobbies</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Info</h2>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/roger-jeasy-bavibidila-757270197/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/rogerjeasy" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="mailto:rogerjeasy@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
            <a href="https://www.instagram.com/roger_bav/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Roger Jeasy Bavibidila. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


