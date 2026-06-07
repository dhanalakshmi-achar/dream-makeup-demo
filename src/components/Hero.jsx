
import React from "react";
import heartsImage from "../assets/hearts.jpg"; // make sure hearts.jpg is inside src/assets
import { Link } from "react-router-dom";
export function Hero() {
  return (

    <section style={{
      position: "relative",
      height: "500px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      overflow: "hidden",
      borderRadius: "12px",
      margin: "20px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      backgroundImage: `url(${heartsImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>
      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "linear-gradient(to right, #FFE8EE, #FFB0C4)",
        opacity: 0.6
      }}></div>

      {/* Hero Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h1 style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
          fontSize: "3rem",
          color: "#FF6FAE",
          marginBottom: "20px"
        }}>
          Glow With Confidence 💖
         
        </h1>
        <p style={{
          fontSize: "1.2rem",
          color: "#333",
          marginBottom: "30px"
        }}>
          
          New! Match your Foundation Shade 
          <br/>
          Discover beauty products that match your vibe ✨
        </p>
       <button style={{
  background: "#FF6FAE",
  color: "white",
  padding: "12px 25px",
  border: "none",
  borderRadius: "25px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.3s ease"
}}>
  <Link to="/ProductCard" style={{ textDecoration: "none", color: "white" }}>
    Shop Now 💄
  </Link>
</button>
      </div>
    </section>
  );
}
