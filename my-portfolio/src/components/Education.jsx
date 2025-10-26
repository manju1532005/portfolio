import React, { useEffect } from "react";
import "../Style.css";

const educationData = [
  {
    title: "Bachelors in Computer Science",
    date: "2022 – 2025",
    description: "Nethaji Memorial Arts and Science College Nenmara, Palakkad, Kerala",
  },
  {
    title: "Higher Secondary (Biology Science)",
    date: "2020 – 2022",
    description: "GHSS Erimayur, Palakkad, Kerala",
  },
];

const TimelineItem = ({ title, date, description }) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const element = document.querySelectorAll(".timeline-item");
    element.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <h3>{title}</h3>
        <span className="date">{date}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Education = () => (
  <section id="education" className="timeline-section">
    <h2>Education</h2>
    <div className="timeline">
      {educationData.map((item, index) => (
        <TimelineItem
          key={index}
          title={item.title}
          date={item.date}
          description={item.description}
        />
      ))}
    </div>
  </section>
);

export default Education;
