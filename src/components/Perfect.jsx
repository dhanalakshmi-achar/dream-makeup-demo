import React, { useState } from "react";

export function Perfect({ addItem }) {
  const [tone, setTone] = useState("");
  const [undertone, setUndertone] = useState("");
  const [suggestion, setSuggestion] = useState(null);

  const products = {
    fair: {
      cool: { name: "Rosé Glow Foundation", price: 799, image: "src/assets/2.png" },
      warm: { name: "Peach Radiance Foundation", price: 799, image: "src/assets/2.png" },
      neutral: { name: "Ivory Balance Foundation", price: 799, image: "src/assets/2.png"}
    },
    medium: {
      cool: { name: "Berry Blush Foundation", price: 899, image: "src/assets/1.png" },
      warm: { name: "Golden Glow Foundation", price: 899, image: "src/assets/3.png" },
      neutral: { name: "Sand Harmony Foundation", price: 899, image: "src/assets/1.png" }
    },
    deep: {
      cool: { name: "Plum Radiance Foundation", price: 999, image: "src/assets/3.png" },
      warm: { name: "Bronze Glow Foundation", price: 999, image: "src/assets/1.png" },
      neutral: { name: "Mocha Balance Foundation", price: 999, image: "src/assets/3.png" }
    }
  };

  const handleMatch = () => {
    if (tone && undertone) {
      setSuggestion(products[tone][undertone]);
    }
  };

  return (
    <section style={{
      padding: "40px",
      background: "linear-gradient(to right, #FFE8EE, #FFB0C4)",
      textAlign: "center"
    }}>
      <h2 style={{ color: "#FF6FAE", fontFamily: "Poppins, sans-serif", marginBottom: "20px" }}>
        ✨ Shade Matcher ✨
      </h2>
      <p style={{ marginBottom: "20px", color: "#555" }}>
        Find your perfect foundation match 💖
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "20px" }}>
        <select value={tone} onChange={(e) => setTone(e.target.value)} style={selectStyle}>
          <option value="">Select Skin Tone</option>
          <option value="fair">Fair</option>
          <option value="medium">Medium</option>
          <option value="deep">Deep</option>
        </select>

        <select value={undertone} onChange={(e) => setUndertone(e.target.value)} style={selectStyle}>
          <option value="">Select Undertone</option>
          <option value="cool">Cool</option>
          <option value="warm">Warm</option>
          <option value="neutral">Neutral</option>
        </select>
      </div>

      <button onClick={handleMatch} style={buttonStyle}>Match My Shade ✨</button>

      {suggestion && (
        <div style={{
          marginTop: "30px",
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(255, 255, 255, 0.1)",
          width: "300px",
          marginInline: "auto"
        }}>
          <img src={suggestion.image} alt={suggestion.name} style={{ width: "100%", borderRadius: "8px" }} />
          <h3 style={{ color: "#FF6FAE", marginTop: "10px" }}>{suggestion.name}</h3>
          <p>₹{suggestion.price}</p>
          <button 
            onClick={() => addItem(suggestion)} 
            style={buttonStyle}
          >
            Add to Cart 🛒
          </button>
        </div>
      )}
    </section>
  );
}

const selectStyle = {
  padding: "10px",
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
  transition: "all 0.3s ease"
};

