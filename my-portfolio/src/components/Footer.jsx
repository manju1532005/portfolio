import React from "react";
import "../style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h3>MANJU.M</h3>
        <p>Crafting frontend experiences with code & creativity ✨</p>

        <div className="social-icons">
          <a
            href="https://github.com/manju1532005"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/manju-m-35042333b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} MANJU. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
