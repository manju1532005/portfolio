import React, { useRef, useEffect } from "react";
import Typed from "typed.js"; // Make sure this package is installed
import "../Style.css";
import bgImage from "../assets/f1.jpg";
const Hero = () => {
  const typedRef = useRef(null);

  // Initialize Typed.js
  useEffect(() => {
    const options = {
      strings: [
        "MERN Stack Developer",
        "Full Stack Developer",
        "Frontend Developer",
        "Backend Developer",
        "React Developer",
        "JavaScript Developer",
        "Web Developer",
      ],
      typeSpeed: 30,
      backSpeed: 30,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);

    return () => typed.destroy();
  }, []);

  // Ripple effect
  const handleRipple = (e) => {
    const button = e.currentTarget;
    const circle = document.createElement("span");
    circle.classList.add("ripple");
    const rect = button.getBoundingClientRect();
    circle.style.left = `${e.clientX - rect.left}px`;
    circle.style.top = `${e.clientY - rect.top}px`;
    button.appendChild(circle);
    setTimeout(() => circle.remove(), 600);
  };

  // Smooth scroll to contact
  const handleScrollToContact = (e) => {
    e.preventDefault();
    const target = document.getElementById("contact");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    target.style.opacity = 0;
    setTimeout(() => {
      target.style.transition = "opacity 0.6s ease-in-out";
      target.style.opacity = 1;
    }, 200);
  };

  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-content">
        <p className="tagline">TURNING IDEAS INTO DIGITAL REALITY</p>
        <h1>
          Hey, I am <span className="highlight">Manju</span>
        </h1>
        <h2 ref={typedRef}></h2>

        <div className="buttons">
          <a
            href="#contact"
            className="btn primary"
            onClick={(e) => {
              handleRipple(e);
              handleScrollToContact(e);
            }}
          >
            Hire Me
          </a>
          <a
            href="/Manju M - FULL STACK DEVELOPER.pdf"
            className="btn outline"
            download
            onClick={handleRipple}
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
