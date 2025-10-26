import React from "react";
import "../Style.css";
import useScrollReveal from "./useScrollReveal"; // ensure this hook exists

const timelineData = [
  {
    title: "Web Developer Intern",
    date: "Aug - Sep 2025",
    description:
      "Worked on web applications using React, Node.js, and MongoDB. Built responsive and user-friendly designs.",
  },
  {
    title: "MERN Stack Developer Internship",
    date: "2024 – 2025",
    description:
      "Developed small web projects and portfolio websites using React and Node.js.",
  },
];

const TimelineItem = ({ title, date, description, className }) => {
  const handleClick = (e) => {
    const ripple = document.createElement("span");
    ripple.className = "ripple";

    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    ripple.style.width = ripple.style.height = `${size}px`;

    ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

    e.currentTarget.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <div className={`${className} timeline-item`} onClick={handleClick}>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <span className="date">{date}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Experience = () => {
  useScrollReveal(".timeline-item");

  return (
    <section id="experience" className="timeline-section">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            date={item.date}
            description={item.description}
            className="reveal"
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
