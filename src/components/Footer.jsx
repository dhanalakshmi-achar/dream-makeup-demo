import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

export function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(to right, #FFE8EE, #FFB0C4)",
      padding: "30px 20px",
      textAlign: "center",
      borderTop: "2px solid #ffa0c9",
      marginTop: "40px"
    }}>
      <h1 style={{ color: "#FF6FAE", fontFamily: "'Dancing Script',cursive", marginBottom: "35px" }}>
        Dream
      </h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/categories" style={linkStyle}>Categories</a>
        <a href="/FeaturedProducts" style={linkStyle}>Featured</a>
        <a href="/Testimonials" style={linkStyle}>Testimonials</a>
        <a href="/ContactForm" style={linkStyle}>Contact</a>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
        <a href="#" style={iconStyle}><FaInstagram /></a>
        <a href="#" style={iconStyle}><FaFacebook /></a>
        <a href="#" style={iconStyle}><FaTwitter /></a>
        <a href="#" style={iconStyle}><FaYoutube /></a>
      </div>

      <div style={{
        backgroundImage: "url('/assets/footer-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.1,
        height: "80px",
        borderRadius: "12px",
        marginBottom: "20px"
      }}></div>
      <p style={{ color: "#555", fontSize: "0.9rem" }}>
        ⚠️ Dream does not ask for payment or personal info via calls,external links 
        <br/>
        © 2026 Dream. All rights reserved ✨
      </p>
    </footer>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
  transition: "all 0.3s ease"
};

const iconStyle = {
  fontSize: "1.5rem",
  background: "white",
  borderRadius: "50%",
  padding: "10px",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  cursor: "pointer",
  transition: "transform 0.3s ease"
};
