import React, { useEffect } from "react";
import "../style.css";
import htmlImg from "../assets/html (2).png";
import cssImg from "../assets/css.png";
import jsImg from "../assets/javascript.png";
import bootstrapImg from "../assets/bootstrap.png";
import reactImg from "../assets/react.png";
import figmaImg from "../assets/figma.png";
import mongoImg from "../assets/mongodb.jpeg";
import expressImg from "../assets/express.jpeg";
import nodeImg from "../assets/node.jpeg"; // Node.js image

const skills = [
  { img: htmlImg, name: "HTML", level: 95, desc: "Semantic markup & responsive layouts" },
  { img: cssImg, name: "CSS", level: 92, desc: "Advanced styling & animations" },
  { img: jsImg, name: "JavaScript", level: 80, desc: "DOM manipulation & ES6+" },
  { img: bootstrapImg, name: "Bootstrap", level: 90, desc: "Responsive design frameworks" },
  { img: reactImg, name: "React", level: 78, desc: "Component-based UI & state management" },
  { img: figmaImg, name: "Figma", level: 60, desc: "UI/UX prototyping & design" },
  { img: mongoImg, name: "MongoDB", level: 85, desc: "NoSQL database for scalable applications" },
  { img: expressImg, name: "Express", level: 80, desc: "Backend framework for Node.js" },
  { img: nodeImg, name: "Node.js", level: 82, desc: "JavaScript runtime for server-side applications" },
];

const Skills = () => {
  useEffect(() => {
    const progressFills = document.querySelectorAll(".progress-fill");
    const options = { threshold: 0.5 };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          fill.style.width = fill.dataset.level + "%";
        }
      });
    }, options);

    progressFills.forEach((fill) => observer.observe(fill));
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.img} alt={`${skill.name} logo`} loading="lazy" />
            <h4>{skill.name}</h4>
            <div className="level-label">{skill.level}%</div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                data-level={skill.level}

                style={{ width: "0%" }}
              ></div>
            </div>
            <span className="tooltip">{skill.desc}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
