// import { useEffect, useState } from "react";
// import { supabase } from "../supabase";
// import { ProductCard } from "./ProductCard.jsx";


// export default function Search() {
//   const [products, setProducts] = useState([]);
//    const [search, setSearch] = useState(""); //
//   const [newProduct, setNewProduct] = useState({
//     name: "",
//     price: "",
//     description: "",
//     img_url: "",
//   });

//   // READ: Fetch products
//   const fetchProducts = async () => {
//     const { data, error } = await supabase
//       .from("search")
//       .select("*")
//       .order("id", { ascending: false });

//     if (error) {
//       console.error("Error fetching products:", error);
//     } else {
//       setProducts(data);
//     }
//   };

//   // CREATE: Add product
//   const addProduct = async () => {
//     const { data, error } = await supabase.from("search").insert([newProduct]);

//     if (error) {
//       console.error("Error adding product:", error);
//     } else {
//       setNewProduct({ name: "", price: "", description: "", img_url: "" });
//       fetchProducts();
//     }
//   };

//   // UPDATE: Edit product
//   const updateProduct = async (id, updates) => {
//     const { data, error } = await supabase
//       .from("search")
//       .update(updates)
//       .eq("id", id);

//     if (error) {
//       console.error("Error updating product:", error);
//     } else {
//       fetchProducts();
//     }
//   };

//   // DELETE: Remove product
//   const deleteProduct = async (id) => {
//     const { data, error } = await supabase.from("search").delete().eq("id", id);

//     if (error) {
//       console.error("Error deleting product:", error);
//     } else {
//       fetchProducts();
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>🛍️ Product Management (CRUD)</h2>

//       {/* Add Product Form */}
//       <div style={{ marginBottom: "20px" }}>
//         <input
//           placeholder="Name"
//           value={newProduct.name}
//           onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        
//         />
//         <input
//   placeholder="Search products..."
//   value={search}
//   onChange={(e) => setSearch(e.target.value)}
// />

//         <input

//           placeholder="Price"
//           value={newProduct.price}
//           onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//         />
//         <input
//           placeholder="Description"
//           value={newProduct.description}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, description: e.target.value })
//           }
//         />
//         <input
//           placeholder="Image URL"
//           value={newProduct.img_url}
//           onChange={(e) =>
//             setNewProduct({ ...newProduct, img_url: e.target.value })
//           }
//         />
//         <button onClick={addProduct}>➕ Add Product</button>
//       </div>
// <div>
//   {products
//     .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
//     .map(p => (
//       <ProductCard key={p.id} product={p} />
//     ))}
// </div>
//       {/* Product List */}
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
//         {products.map((p) => (
//           <div
//             key={p.id}
//             style={{
//               width: "220px",
//               background: "white",
//               padding: "15px",
//               borderRadius: "10px",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//               textAlign: "center",
//             }}
//           >
//             <img
//               src={p.img_url}
//               alt={p.name}
//               style={{
//                 width: "100%",
//                 height: "140px",
//                 objectFit: "cover",
//                 borderRadius: "8px",
//               }}
//             />
//             <h3>{p.name}</h3>
//             <p>{p.description}</p>
//             <p style={{ color: "green", fontWeight: "bold" }}>₹ {p.price}</p>

//             {/* Update Example */}
//             <button
//               onClick={() =>
//                 updateProduct(p.id, { price: Number(p.price) + 100 })
//               }
//               style={{ margin: "5px", background: "#ff9900", color: "white" }}
//             >
//               ✏️ Update Price
//             </button>

//             {/* Delete */}
//             <button
//               onClick={() => deleteProduct(p.id)}
//               style={{ margin: "5px", background: "red", color: "white" }}
//             >
//               🗑️ Delete
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// import { useState, useEffect } from "react";
// import { supabase } from "../supabase";
// import ProductCard from "./ProductCard";

// export default function Search() {
//   const [products, setProducts] = useState([]);
//   const [form, setForm] = useState({ name: "", description: "", price: "", img_url: "" });

//   // FETCH products
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//  const fetchProducts = async () => {
//   const { data, error } = await supabase.from("search").select("*");
//   if (error) {
//     console.error("Error fetching products:", error);
//   } else {
//     console.log("Products from Supabase:", data);
//     setProducts(data);
//   }
// };

//   // CREATE product
//   const addProduct = async () => {
//     const { data, error } = await supabase.from("search").insert([form]);
//     if (error) console.error(error);
//     else {
//       setProducts([...products, ...data]);
//       setForm({ name: "", description: "", price: "", img_url: "" });
//     }
//   };

//   // UPDATE product
//   const updateProduct = async (id, updates) => {
//     const { data, error } = await supabase.from("search").update(updates).eq("id", id);
//     if (error) console.error(error);
//     else setProducts(products.map(p => (p.id === id ? data[0] : p)));
//   };

//   // DELETE product
//   const deleteProduct = async (id) => {
//     const { error } = await supabase.from("search").delete().eq("id", id);
//     if (error) console.error(error);
//     else setProducts(products.filter(p => p.id !== id));
//   };

//   return (
  
//     <div>
//       <h2>✨ Add Product</h2>
  
//       <input
//         placeholder="Name"
//         value={form.name}
//         onChange={(e) => setForm({ ...form, name: e.target.value })}
//       />
//       <input
//         placeholder="Description"
//         value={form.description}
//         onChange={(e) => setForm({ ...form, description: e.target.value })}
//       />
//       <input
//         placeholder="Price"
//         value={form.price}
//         onChange={(e) => setForm({ ...form, price: e.target.value })}
//       />
//       <input
//         placeholder="Image URL"
//         value={form.img_url}
//         onChange={(e) => setForm({ ...form, img_url: e.target.value })}
//       />
//       <button onClick={addProduct}>Add</button>

//       <h2>📦 Products</h2>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {products.map((p) => (
//           <ProductCard
//             key={p.id}
//             product={p}
//             updateProduct={updateProduct}
//             deleteProduct={deleteProduct}
//           />
//         ))}
//       </div>
    
//     </div>
//   );
//   console.log ("Products from Supabase:",products);
// }

import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import ProductCard from "./ProductCard";

export default function Search({ addToCart, removeFromCart, cart }) {

 
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    img_url: ""
  });

  // FETCH products on load
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("search").select("*");
    if (error) {
      console.error("Error fetching products:", error);
    } else {
      console.log("Products from Supabase:", data);
      setProducts(data);
    }
  };

  // ADD product
  const addProduct = async () => {
    const { data, error } = await supabase.from("search").insert([form]).select();
    if (error) {
      console.error("Error adding product:", error);
    } else {
      setProducts([...products, ...data]); // update UI instantly
      setForm({ name: "", description: "", price: "", img_url: "" }); // clear form
    }
  };

  // UPDATE product
  const updateProduct = async (id, updates) => {
    const { data, error } = await supabase.from("search").update(updates).eq("id", id).select();
    if (error) {
      console.error("Error updating product:", error);
    } else {
      setProducts(products.map((p) => (p.id === id ? data[0] : p)));
    }
  };

  // DELETE product
  const deleteProduct = async (id) => {
    const { error } = await supabase.from("search").delete().eq("id", id);
    if (error) {
      console.error("Error deleting product:", error);
    } else {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "#FF6FAE", fontFamily: "Poppins, sans-serif", marginBottom: "20px" }}>✨ Add Product</h2>
      
     

<input 
  placeholder="Name"
  value={form.name}
  onChange={(e) => setForm({ ...form, name: e.target.value })}
  style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "1rem" }}
/>

<input
  placeholder="Description"
  value={form.description}
  onChange={(e) => setForm({ ...form, description: e.target.value })}
  style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "1rem" }}
/>

<input
  placeholder="Price"
  value={form.price}
  onChange={(e) => setForm({ ...form, price: e.target.value })}
  style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "1rem" }}
/>

<input
  placeholder="Image URL"
  value={form.img_url}
  onChange={(e) => setForm({ ...form, img_url: e.target.value })}
  style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "8px", border: "1px solid #ccc", fontSize: "1rem" }}
/>

      <h2 style={{ color: "#FF6FAE", fontFamily: "Poppins, sans-serif", marginBottom: "20px" }}>📦 Products</h2>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)", // ✅ 3 per row
        gap: "20px",
        padding: "40px"
      }}
    >
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          cart={cart}
        />
      ))}

    
    </div>

</div>

      

  );
}

