// export function ProductCard({ product, addItem }) {
  
//   return (
    
//     <div style={{
//       background: "white",
//       padding: "20px",
//       borderRadius: "12px",
//       boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//       textAlign: "center",
//       transition: "transform 0.3s ease",
//       cursor: "pointer"
//     }}
//     onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
//     onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
//     >
    
//       {/* Image slot */}
//       <img 
//         src={product.img_url} 
//         alt={product.name} 
//         style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }} 
//       />

//       {/* Product details */}
//       <h3 style={{ color: "#FF6FAE", fontFamily: "Poppins, sans-serif" }}>
//         {product.name}
//       </h3>
//       <p style={{ fontSize: "1.1rem", color: "#333" }}>₹{product.price}</p>

//       {/* Add to Cart button */}
//       <button 
//         onClick={() => addItem(product)}
//         style={{
//           background: "#FF6FAE",
//           color: "white",
//           padding: "8px 15px",
//           border: "none",
//           borderRadius: "20px",
//           cursor: "pointer",
//           marginTop: "10px",
//           fontWeight: "bold",
//           transition: "all 0.3s ease"
//         }}
//       >
//         Add to Cart ✨
//       </button>
//       <div className="card">
//       <img src={product.url} alt={product.name} />
//       <h3>{product.title}</h3>
//       <p>{product.description}</p>
//       <p>₹{product.price}</p>
//       <button>Add to Cart</button>
//     </div>
//     </div>
    
//   );
// }

export default function ProductCard({ product, addToCart, removeFromCart, cart }) {
  if (!product) return null; // safety check

  const inCart = cart.some((item) => item.id === product.id);

  console.log("ProductCard received:", product); // debug

  return (
    <div style={{
      background: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      textAlign: "center",
      width: "220px"
    }}>
      <img
        src={product.img_url || product.image}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }}
      />
      <h3 style={{ color: "#FF6FAE", fontFamily: "Poppins, sans-serif" }}>
        {product.name}
      </h3>
      <p>{product.description}</p>
      <p>₹{product.price}</p>

      {inCart ? (
        <button
          onClick={() => removeFromCart(product.id)}
          style={{
            background: "#ccc",
            color: "#333",
            padding: "8px 15px",
            borderRadius: "20px",
            cursor: "pointer"
          }}
        >
          Remove ❌
        </button>
      ) : (
        <button
          onClick={() => addToCart(product)}
          style={{
            background: "#FF6FAE",
            color: "white",
            padding: "8px 15px",
            border: "none",
            borderRadius: "20px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Add to Cart ✨
        </button>
      )}
    </div>
  );
}




// export function FeaturedProducts() {
//   const products = [
//     { name: "Lipgloss – Rose Pink", price: 499, image: "src/assets/gloss1.jpg", badge: "Best Seller" },
//     { name: "Glow Foundation – Warm", price: 899, image: "src/assets/2.png", badge: "Trending" },
//     { name: "Shimmer Eyeshadow Palette", price: 1299, image: "src/assets/eyeshadow.jpg", badge: "New Arrival" }
//   ];

//   return (
//     <section style={{
//       padding: "40px",
//       background: "linear-gradient(to right, #FFE8EE, #FFB0C4)",
//       textAlign: "center"
//     }}>
//       <h2 style={{ color: "#FF6FAE", fontFamily: "Poppins, sans-serif", marginBottom: "30px" }}>
//         ✨ Featured Products ✨
//       </h2>

//       {/* ✅ Scrollable container */}
//      <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//         gap: "20px",
//         maxHeight: "600px",   // ✅ limit height
//         overflowY: "auto",    // ✅ vertical scroll
//         paddingRight: "10px"
//       }}>
//         {products.map((product, index) => (
//           <div key={index} style={{
//             background: "white",
//             padding: "20px",
//             borderRadius: "12px",
//             boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//             minWidth: "250px",   // ✅ fixed width for scroll
//             textAlign: "center",
//             flex: "0 0 auto"     // ✅ prevents shrinking
//           }}>
//             <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "8px" }} />
//             <h3 style={{ color: "#FF6FAE", marginTop: "10px" }}>{product.name}</h3>
//             <p>₹{product.price}</p>
//             <span style={{
//               display: "inline-block",
//               background: "#FF6FAE",
//               color: "white",
//               padding: "5px 10px",
//               borderRadius: "15px",
//               fontSize: "0.9rem",
//               marginTop: "10px"
//             }}>
//               {product.badge}
//             </span>
//             <button style={{
//               background: "#FF6FAE",
//               color: "white",
//               padding: "8px 15px",
//               border: "none",
//               borderRadius: "20px",
//               cursor: "pointer",
//               marginTop: "15px"
//             }}>
//               Add to Cart ✨
//             </button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }