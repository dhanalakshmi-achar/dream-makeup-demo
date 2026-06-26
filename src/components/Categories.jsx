export function Categories() {
  const categories = [
    { name: "Lips 💄", image: "src/assets/model1.jpg" },
    { name: "Eyes ✨", image: "src/assets/model2.jpg" },
    { name: "Skincare 🌸", image: "src/assets/model3.jpg" },
    { name: "Foundation 🎨", image: "src/assets/model4.jpg" },
    { name: "Haircare 🎀", image: "src/assets/model5.jpg" },
        { name: "Skincare 🌸", image: "src/assets/model6.jpg" },
    { name: "Foundation 🎨", image: "src/assets/model7.jpg" },
    { name: "Haircare 🎀", image: "src/assets/model8.jpg" }
  ];

  return (
    <section style={{
      padding: "40px",
      background: "linear-gradient(to right, #FFE8EE, #fdccd8)",
      textAlign: "center"
    }}>
      <h2 style={{ color: "#FF6FAE", fontFamily: "Poppins, sans-serif", marginBottom: "30px" }}>
        ✨ Shop by Category ✨
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px"
      }}>
        {categories.map((cat, index) => (
          <div key={index} style={{
            background: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            overflow: "hidden",
            transition: "transform 0.3s ease",
            cursor: "pointer"
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            {/* Image slot */}
            <img src={cat.image} alt={cat.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h3 style={{ padding: "15px", color: "#FF6FAE" }}>{cat.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
