import React, { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to right, #FFE8EE, #FFB0C4)",
      padding: "40px"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        width: "400px",
        textAlign: "center",
        position: "relative"
      }}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: "url('/assets/contact-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.1,
          borderRadius: "12px",
          zIndex: 0
        }}></div>

        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 style={{ color: "#FF6FAE", marginBottom: "20px" }}>Contact Us 💌</h2>

          {!submitted ? (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                style={{ ...inputStyle, minHeight: "100px" }}
                required
              />
              <button type="submit" style={buttonStyle}>Send ✨</button>
            </form>
          ) : (
            <p style={{ color: "#FF6FAE", fontWeight: "bold", fontSize: "1.2rem" }}>
              ✨ Thank you, {formData.name}! Your message has been sent 💖
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem"
};

const buttonStyle = {
  background: "#FF6FAE",
  color: "white",
  padding: "12px 25px",
  border: "none",
  borderRadius: "25px",
  fontWeight: "bold",
  cursor: "pointer",
  width: "100%",
  transition: "all 0.3s ease"
};
