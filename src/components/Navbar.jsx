import React, { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      background: "linear-gradient(to right, #FFE8EE, #FFB0C4)",
      padding: "15px 40px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      position: "sticky",
      top: 0,
      zIndex: 1000
    }}>
      <h1 style={{ 
  color: "#FF6FAE", 
  fontFamily: "'Dancing Script',cursive",   // ✅ cursive font
  fontWeight: "bold", 
  letterSpacing: "1px" 
}}>
  dream
</h1>


      {/* Desktop Links */}
      <div style={{ display: "flex", gap: "20px" }} className="desktop-links">
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/ProductCard" style={linkStyle}>Shop</Link>
        <Link to="/Perfect" style={linkStyle}>Shade Matcher</Link>
        <Link to="/Cart" style={linkStyle}>Cart 🛒</Link>
        <Link to="/Login" style={linkStyle}>Login</Link>
        <Link to="/search" style={linkStyle}>Search</Link>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600&display=swap" rel="stylesheet"></link>

      </div>

      {/* Hamburger for mobile */}
      <div 
        style={{ cursor: "pointer", fontSize: "24px", color: "#FF6FAE" }} 
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{
          position: "absolute",
          top: "70px",
          right: "20px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "15px"
        }}>
          <Link to="/" style={mobileLinkStyle}>Home</Link>
          <Link to="/Perfect" style={mobileLinkStyle}>Shade Matcher</Link>
          <Link to="/Cart" style={mobileLinkStyle}>Cart 🛒</Link>
          <Link to="/Login" style={mobileLinkStyle}>Login</Link>
           <Link to="/ProductCard" style={mobileLinkStyle}>Shop</Link>
        </div>
      )}
    </nav>
  );
}

// Reusable link styles
const linkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  fontWeight: "500",
  padding: "8px 15px",
  borderRadius: "20px",
  transition: "all 0.3s ease",
};

const mobileLinkStyle = {
  textDecoration: "none",
  color: "#FF6FAE",
  fontWeight: "600",
  padding: "10px",
  borderRadius: "8px",
  background: "#FFE8EE",
  textAlign: "center"
};
