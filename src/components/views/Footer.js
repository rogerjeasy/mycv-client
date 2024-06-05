// src/components/Footer.tsx
import React from "react";
import '../../styles/views/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About</h2>
          <p>Lisungui is a project aimed at bringing the best user experience.</p>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h2>Contact Info</h2>
          <p>Email: info@lisungui.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Lisungui. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;