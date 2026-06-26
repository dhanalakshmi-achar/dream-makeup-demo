export function Testimonials() {
  const testimonials = [
    {
      name: "June.",
      review: "The Velvet Lipstick is my go-to! Smooth, long-lasting, and gorgeous 💄",
      rating: 5,
      image: "src/assets/user1.jpg"
    },
    {
      name: "Pixel.",
      review: "Glow Foundation gave me the perfect match. I feel confident every day ✨",
      rating: 4,
      image: "src/assets/gloss.jpg"
    },
    {
      name: "Shinchan.",
      review: "Shimmer Eyeshadow Palette is stunning! So many shades to play with 🌸",
      rating: 5,
      image: "src/assets/eyeshadow.jpg"
    }
  ];

  return (
    <section style={{
      padding: "40px",
      background: "  #FFE8EE ",
      textAlign: "center"
    }}>
      <h2 style={{ color: "#FF6FAE", fontFamily: "Poppins, sans-serif", marginBottom: "30px" }}>
         What Our Customers Say 
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {testimonials.map((t, index) => (
          <div key={index} style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center"
          }}>
            {/* Profile image slot */}
            <img 
              src={t.image} 
              alt={t.name} 
              style={{ width: "80px", height: "80px", borderRadius: "50%", objectFit: "cover", marginBottom: "10px" }} 
            />
            <h3 style={{ color: "#FF6FAE" }}>{t.name}</h3>
            <p style={{ fontSize: "0.95rem", color: "#555", margin: "10px 0" }}>
              "{t.review}"
            </p>
            {/* Star rating */}
            <div style={{ color: "#FFD700", fontSize: "1.2rem" }}>
              {"⭐".repeat(t.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
