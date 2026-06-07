export function FeaturedProducts() {
  const products = [
    { name: "Lipgloss – Rose Pink", price: 499, image: "src/assets/gloss1.jpg", badge: "Best Seller" },
    { name: "Glow Foundation – Warm", price: 899, image: "src/assets/2.png", badge: "Trending" },
    { name: "Shimmer Eyeshadow Palette", price: 1299, image: "src/assets/eyeshadow.jpg", badge: "New Arrival" }
  ];

  return (
    <section style={{
      padding: "40px",
      background: "linear-gradient(to right, #FFE8EE, #FFB0C4)",
      textAlign: "center"
    }}>
      <h2 style={{ color: "#FF6FAE", fontFamily: "Poppins, sans-serif", marginBottom: "30px" }}>
        ✨ Featured Products ✨
      </h2>

      {/* ✅ Scrollable container */}
     <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxHeight: "600px",   // ✅ limit height
        overflowY: "auto",    // ✅ vertical scroll
        paddingRight: "10px"
      }}>
        {products.map((product, index) => (
          <div key={index} style={{
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            minWidth: "250px",   // ✅ fixed width for scroll
            textAlign: "center",
            flex: "0 0 auto"     // ✅ prevents shrinking
          }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "8px" }} />
            <h3 style={{ color: "#FF6FAE", marginTop: "10px" }}>{product.name}</h3>
            <p>₹{product.price}</p>
            <span style={{
              display: "inline-block",
              background: "#FF6FAE",
              color: "white",
              padding: "5px 10px",
              borderRadius: "15px",
              fontSize: "0.9rem",
              marginTop: "10px"
            }}>
              {product.badge}
            </span>
            <button style={{
              background: "#FF6FAE",
              color: "white",
              padding: "8px 15px",
              border: "none",
              borderRadius: "20px",
              cursor: "pointer",
              marginTop: "15px"
            }}>
              Add to Cart ✨
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// import React, { useState } from "react";

// export function FeaturedProducts() {
//   const products = [
//     { name: "Velvet Lipstick – Rose Pink", price: 499, image: "/assets/lipstick.jpg", badge: "Best Seller" },
//     { name: "Glow Foundation – Warm Beige", price: 899, image: "/assets/foundation.jpg", badge: "Trending" },
//     { name: "Shimmer Eyeshadow Palette", price: 1299, image: "/assets/eyeshadow.jpg", badge: "New Arrival" },
//     { name: "Hydrating Skincare Serum", price: 699, image: "/assets/skincare.jpg", badge: "Top Rated" }
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const nextProduct = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
//   };

//   const prevProduct = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
//   };

//   return (
//     <section style={{
//       padding: "40px",
//       background: "linear-gradient(to right, #FFE8EE, #FFB0C4)",
//       textAlign: "center"
//     }}>
//       <h2 style={{ color: "#FF6FAE", fontFamily: "Poppins, sans-serif", marginBottom: "30px" }}>
//         ✨ Featured Products ✨
//       </h2>

//       <div style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "20px"
//       }}>
//         <button onClick={prevProduct} style={navButtonStyle}>◀</button>

//         <div style={{
//           background: "white",
//           padding: "20px",
//           borderRadius: "12px",
//           boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//           width: "250px",
//           textAlign: "center"
//         }}>
//           <img src={products[currentIndex].image} alt={products[currentIndex].name} style={{ width: "100%", borderRadius: "8px" }} />
//           <h3 style={{ color: "#FF6FAE", marginTop: "10px" }}>{products[currentIndex].name}</h3>
//           <p>₹{products[currentIndex].price}</p>
//           <span style={{
//             display: "inline-block",
//             background: "#FF6FAE",
//             color: "white",
//             padding: "5px 10px",
//             borderRadius: "15px",
//             fontSize: "0.9rem",
//             marginTop: "10px"
//           }}>
//             {products[currentIndex].badge}
//           </span>
//           <button style={{
//             background: "#FF6FAE",
//             color: "white",
//             padding: "8px 15px",
//             border: "none",
//             borderRadius: "20px",
//             cursor: "pointer",
//             marginTop: "15px"
//           }}>
//             Add to Cart ✨
//           </button>
//         </div>

//         <button onClick={nextProduct} style={navButtonStyle}>▶</button>
//       </div>
//     </section>
//   );
// }

// const navButtonStyle = {
//   background: "#FF6FAE",
//   color: "white",
//   border: "none",
//   borderRadius: "50%",
//   width: "40px",
//   height: "40px",
//   cursor: "pointer",
//   fontSize: "1.2rem"
// };
