export function Banner() {
  return (
    <section style={{
      position: "relative",
      height: "300px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      background: "linear-gradient(to right, #FFE8EE, #FFB0C4)",
      overflow: "hidden",
      borderRadius: "12px",
      margin: "40px 20px",
      boxShadow: "0 4px 15px rgba(255, 255, 255, 0.1)"
    }}>
      {/* Background image slot
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundImage: "url('/assets/hearts.jpg')", // <-- replace with your image
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 25
      }}></div> */}

      {/* Promo Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h2 style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: "bold",
          fontSize: "2rem",
          color: "#FF6FAE"
        }}>
          ✨ Summer Glow Sale ✨
        </h2>
        <p style={{ color: "#333", margin: "15px 0", fontSize: "1.1rem" }}>
          Get up to <strong>50% OFF</strong> on selected products!
        </p>
        <button style={{
          background: "#FF6FAE",
          color: "white",
          padding: "12px 25px",
          border: "none",
          borderRadius: "25px",
          fontWeight: "bold",
          cursor: "pointer"
        }}>
          Shop Now 💄
        </button>
      </div>
    </section>
  );
}

