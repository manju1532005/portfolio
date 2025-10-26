import React, { useEffect } from "react";
import "../Style.css";
import todoImg from "../assets/collab.png";
import bloodHeroImg from "../assets/task.png";
import medicineFinderImg from "../assets/Screenshot (330).png";

const Projects = () => {
  const projects = [
    { img: todoImg, title: "Collab notes", tech: "HTML, CSS, JavaScript, React, MongoDB", link: "https://collab-note-app-dusky.vercel.app" },
    { img: bloodHeroImg, title: "Collaborative AI-Powered Ideation Project Management Platform.", tech: "HTML, CSS, JavaScript, React, MongoDB", link: "https://github.com/manju1532005/wellness" },
    { img: medicineFinderImg, title: "Medicine Finder", tech: "HTML, CSS, JavaScript", link: "https://medicine-finder-zwddmjj75-manju-ms-projects.vercel.app/" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("fade-up-visible");
        });
      },
      { threshold: 0.2 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title fade-up fade-up-delay-1">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card fade-up fade-up-delay-${index + 2}`}>
            <img src={project.img} alt={`${project.title} screenshot`} loading="lazy" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.tech}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
