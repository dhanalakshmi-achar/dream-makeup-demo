import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import ProductCard from "./ProductCard";

export default function ProductList({ addToCart, removeFromCart, cart }) {
  const [products, setProducts] = useState([]);

  // Local products (assets)
  const localProducts = [
          { name: "Lipgloss – Rose Pink", price: 499, image: "src/assets/gloss.jpg" },
            { name: "Lip gloss – 10 shades available", price: 499, image: "src/assets/j.jpeg" },
                     { name: "Blush – 10 shades available", price: 499, image: "src/assets/a.jpeg" },
                 { name: "Makeup – 10 shades available", price: 499, image: "src/assets/b.jpeg" },
                          { name: "Makeup – 10 shades available", price: 499, image: "src/assets/c.jpeg" },
    { name: "Glow Foundation – Warm Beige", price: 899, image: "src/assets/foundation.jpg" },
    { name: "Shimmer Eyeshadow Palette", price: 1299, image: "src/assets/mars.jpg" },
             { name: "Makeup – 10 shades available", price: 499, image: "src/assets/d.jpeg" },
                      { name: "Makeup – 10 shades available", price: 499, image: "src/assets/e.jpeg" },
        { name: "Blush – Coral Glow", price: 699, image: "src/assets/blush.jpg" },
    { name: "Glow Foundation – Warm Beige", price: 899, image: "src/assets/1.png" },
             { name: "Makeup – 10 shades available", price: 499, image: "src/assets/f.jpeg" },
                      { name: "Makeup – 10 shades available", price: 499, image: "src/assets/g.jpeg" },
                               { name: "Makeup – 10 shades available", price: 499, image: "src/assets/h.jpeg" },
    { name: "Shimmer Eyeshadow Palette", price: 1299, image: "src/assets/eyeshadow.jpg" },
    { name: "Blush – Rose Pink", price: 499, image: "src/assets/blush2.jpg" },
             { name: "Makeup – 10 shades available", price: 499, image: "src/assets/i.jpeg" },
    { name: "Glow Foundation – Warm Beige", price: 899, image: "src/assets/2.png" }
  ]
  

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from("search").select("*");
    if (error) {
      console.error("Error fetching products:", error);
    } else {
      // Merge Supabase + local products
      setProducts([...data, ...localProducts]);
    }
  };

  return (
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
      
  );
}
