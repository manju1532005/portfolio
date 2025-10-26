import React, { useEffect } from "react";
import "../Style.css";
import passportImg from "../assets/s2.jpg";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-up-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container about-grid">
        {/* Profile Image */}
        <div className="about-img fade-up fade-up-delay-1">
          <div className="about-bg-skew floating-bg"></div>
          <img src={passportImg} alt="Profile of Manju" loading="lazy" className="hover-3d" />
        </div>

        {/* Content */}
        <div className="about-content fade-up fade-up-delay-2">
          <h5 className="section-subtitle">MY INTRODUCTION</h5>
          <h2>About Me</h2>

          <p className="fade-up fade-up-delay-3">
            I'm <b>Manju</b>, a Full Stack Developer from Kerala. I enjoy building responsive and user-friendly websites. I’m skilled in{" "}
            <b className="highlight-skill">HTML, CSS, JavaScript, React, MongoDB</b>, with hands-on project experience.
          </p>

          <p className="fade-up fade-up-delay-4">
            I've created mini projects like <b>Collab notes, </b>, and <b>Medicine Finder</b>.
          </p>

          <p className="fade-up fade-up-delay-5">
            I’m passionate about clean UI and mobile-first design, always looking to grow in a tech-driven team and learn every day.
          </p>

          <p className="fade-up fade-up-delay-6">
            <em>“Design is intelligence made visible. Code brings it to life.”</em>
          </p>

          {/* Personal Details */}
          <div className="about-details fade-up fade-up-delay-7">
            <p><strong>Full Name:</strong> Manju M</p>
            <p><strong>Date of birth:</strong> March 15, 2005</p>
            <p><strong>Address:</strong> Palakkad, Kerala, India</p>
            <p><strong>Zip code:</strong> 678681</p>
            <p><strong>Email:</strong> <a href="mailto:manjumm454545@gmail.com">manjumm454545@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+917510715947">+91-7510715947</a></p>
          </div>

          {/* Interests */}
          <div className="interests fade-up fade-up-delay-8">
            <span><i className="fas fa-music"></i> Music</span>
            <span><i className="fas fa-plane"></i> Travel</span>
            <span><i className="fas fa-film"></i> Movies</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
