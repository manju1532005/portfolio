import React from "react";
import "../style.css";
import useScrollReveal from "./useScrollReveal"; // make sure this hook exists

const timelineData = [
  {
    title: "Web Developer Intern",
    date: "Aug 2025 – Present",
    description:
      "Working on full-stack applications using React.js, Node.js, and MongoDB. Building responsive UIs and integrating APIs.",
  },
  {
    title: "MERN Stack Developer Internship",
    date: "2024 – 2025",
    description:
      "Created small-scale projects for clients including portfolio websites and single-page applications.",
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

    setTimeout(() => {
      ripple.remove();
    }, 600);
  };

  return (
    <div className={className} onClick={handleClick}>
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
  // Apply scroll reveal animation to all timeline items
  useScrollReveal(".timeline-item");

  return (
    <section id="experience" className="timeline-section">
      <h2>Experience</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            title={item.title}
            date={item.date}
            description={item.description}
            className="timeline-item reveal" // needed for scroll reveal
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
