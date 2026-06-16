// import React from "react";

// export function Cart({ cartItems, setCartItems }) {
//   const removeItem = (index) => {
//     const updatedCart = cartItems.filter((_, i) => i !== index);
//     setCartItems(updatedCart);
//   };

//   return (
//     <section style={{
//       minHeight: "100vh",
//       padding: "40px",
//       background: "linear-gradient(to right, #FFE8EE, #FFB0C4)",
//       textAlign: "center"
//     }}>
//       <h2 style={{ color: "#FF6FAE", fontFamily: "Poppins, sans-serif", marginBottom: "20px" }}>
//         🛒 Your Cart
//       </h2>

//       {cartItems.length === 0 ? (
//         <p style={{ fontSize: "1.2rem", color: "#555" }}>
//           Your cart is glowing empty ✨
//         </p>
//       ) : (
//         <>
//           {/* Grid layout for items */}
//           <div style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", // 👈 auto small columns
//             gap: "20px",
//             justifyItems: "center"
//           }}>
//             {cartItems.map((item, index) => (
//               <div key={index} style={{
//                 background: "white",
//                 padding: "15px",
//                 borderRadius: "12px",
//                 boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
//                 width: "220px", // 👈 smaller card size
//                 textAlign: "center"
//               }}>
//                 <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "8px" }} />
//                 <h3 style={{ color: "#FF6FAE" }}>{item.name}</h3>
//                 <p>₹{item.price}</p>
//                 <button 
//                   onClick={() => removeItem(index)}
//                   style={{
//                     background: "#FF6FAE",
//                     color: "white",
//                     padding: "8px 15px",
//                     border: "none",
//                     borderRadius: "20px",
//                     cursor: "pointer",
//                     marginTop: "10px"
//                   }}
//                 >
//                   Remove ❌
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* Total + Checkout */}
//           <div style={{ marginTop: "30px" }}>
//             <h3 style={{ color: "#333" }}>
//               Total: ₹{cartItems.reduce((sum, item) => sum + item.price, 0)}
//             </h3>
//             <button style={{
//               background: "#FF6FAE",
//               color: "white",
//               padding: "12px 25px",
//               border: "none",
//               borderRadius: "25px",
//               fontWeight: "bold",
//               cursor: "pointer",
//               marginTop: "20px"
//             }}>
//               Checkout ✨
//             </button>
//           </div>
//         </>
//       )}
//     </section>
//   );
// }

import React from "react";

export function Cart({ cart, removeFromCart }) {
  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "40px",
        background: "linear-gradient(to right, #FFE8EE, #FFB0C4)",
        textAlign: "center"
      }}
    >
      <h2 style={{ color: "#FF6FAE", fontFamily: "Poppins, sans-serif", marginBottom: "20px" }}>
        🛒 Your Cart
      </h2>

      {cart.length === 0 ? (
        <p style={{ fontSize: "1.2rem", color: "#555" }}>
          Your cart is glowing empty ✨
        </p>
      ) : (
        <>
          {/* Grid layout for items */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              justifyItems: "center"
            }}
          >
            {cart.map((item) => (
              <div
                key={item.id}
                style={{
                  background: "white",
                  padding: "15px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                  width: "220px",
                  textAlign: "center"
                }}
              >
                <img
                  src={item.img_url || item.image}
                  alt={item.name}
                  style={{ width: "100%", borderRadius: "8px" }}
                />
                <h3 style={{ color: "#FF6FAE" }}>{item.name}</h3>
                <p>₹{item.price}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  style={{
                    background: "#FF6FAE",
                    color: "white",
                    padding: "8px 15px",
                    border: "none",
                    borderRadius: "20px",
                    cursor: "pointer",
                    marginTop: "10px"
                  }}
                >
                  Remove ❌
                </button>
              </div>
            ))}
          </div>

          {/* Total + Checkout */}
          <div style={{ marginTop: "30px" }}>
            <h3 style={{ color: "#333" }}>
              Total: ₹{cart.reduce((sum, item) => sum + item.price, 0)}
            </h3>
            <button
              style={{
                background: "#FF6FAE",
                color: "white",
                padding: "12px 25px",
                border: "none",
                borderRadius: "25px",
                fontWeight: "bold",
                cursor: "pointer",
                marginTop: "20px"
              }}
            >
              Checkout ✨
            </button>
          </div>
        </>
      )}
    </section>
  );
}
