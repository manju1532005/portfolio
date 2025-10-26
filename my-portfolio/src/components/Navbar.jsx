import React, { useState, useEffect } from "react";
import "../Style.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(true);

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 150;

      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll with fade-in effect
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const target = document.getElementById(sectionId);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.style.opacity = 0;
    setTimeout(() => {
      target.style.transition = "opacity 0.6s ease-in-out";
      target.style.opacity = 1;
    }, 200);
  };

  // Theme toggle effect
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="logo">MANJU.M</div>

      <input type="checkbox" id="menu-toggle" aria-label="Toggle menu" />
      <label htmlFor="menu-toggle" className="menu-icon">
        <span className="navicon"></span>
      </label>

      <ul className="menu">
        {["home", "about", "education", "experience", "skills", "projects", "contact"].map(
          (section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? "active" : ""}
                onClick={(e) => handleNavClick(e, section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            </li>
          )
        )}

       
      </ul>
    </nav>
  );
};

export default Navbar;
