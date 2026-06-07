export function ProductCard({ product, addItem }) {
  return (
    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
      transition: "transform 0.3s ease",
      cursor: "pointer"
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
    onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      {/* Image slot */}
      <img 
        src={product.image} 
        alt={product.name} 
        style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }} 
      />

      {/* Product details */}
      <h3 style={{ color: "#FF6FAE", fontFamily: "Poppins, sans-serif" }}>
        {product.name}
      </h3>
      <p style={{ fontSize: "1.1rem", color: "#333" }}>₹{product.price}</p>

      {/* Add to Cart button */}
      <button 
        onClick={() => addItem(product)}
        style={{
          background: "#FF6FAE",
          color: "white",
          padding: "8px 15px",
          border: "none",
          borderRadius: "20px",
          cursor: "pointer",
          marginTop: "10px",
          fontWeight: "bold",
          transition: "all 0.3s ease"
        }}
      >
        Add to Cart ✨
      </button>
    </div>
  );
}

