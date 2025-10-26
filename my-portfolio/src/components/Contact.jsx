import React, { useState } from "react";
import "../Style.css";

const Contact = () => {
  const [status, setStatus] = useState("");

  // Ripple effect for button
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

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xdkdjwrg", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        form.reset();
      } else setStatus("Oops! Something went wrong.");
    } catch {
      setStatus("Oops! Something went wrong.");
    }
  };

  return (
    <section id="contact" className="contact-section fade-up fade-up-delay-1">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="sr-only">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="sr-only">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="sr-only">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn primary"
            onClick={handleRipple}
          >
            Send Message
          </button>
        </form>
        {status && (
          <p style={{ marginTop: "1rem", textAlign: "center" }}>{status}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
