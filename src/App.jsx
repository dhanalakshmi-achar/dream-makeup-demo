// import React, {useState, useEffect} from "react"
// import {supabase} from "./supabase"
// import hearts from './assets/hearts.jpg'
// import {Navbar} from './components/Navbar.jsx'
// import {Hero} from './components/Hero.jsx'
// import {Banner} from './components/Banner.jsx'
// import Search from "./components/Search.jsx"
// import {Categories} from './components/Categories.jsx'
// import {FeaturedProducts} from './components/FeaturedProducts.jsx'
// import {Perfect} from './components/Perfect.jsx'
// import {Testimonials} from './components/Testimonials.jsx'
// import {ContactForm} from './components/ContactForm.jsx'
// import {Footer} from './components/Footer.jsx'
// import {Login} from './components/Login.jsx'
// import {Cart} from './components/Cart.jsx'
// import {ProductCard} from './components/ProductCard.jsx'
// import {Routes,Route} from "react-router-dom";
// function App() {

//   const [cartItems, setCartItems] = useState([]);
//   const [products, setProducts] = useState([]);

//   const addItem = (product) => {
//     setCartItems([...cartItems, product]);
//   }
//   useEffect(() => {
//     const fetchProducts = async () => {
//       const { data, error } = await supabase
//         .from("search")
//         .select("*")
//         .order("id", { ascending: false });

//       if (error) {
//         console.error("Error fetching products:", error);
//       } else {
//         setProducts(data);
//       }
//     };

//     fetchProducts();
//   }, []);
//   // const products = [
//   //         { name: "Lipgloss – Rose Pink", price: 499, image: "src/assets/gloss.jpg" },
//   //           { name: "Lip gloss – 10 shades available", price: 499, image: "src/assets/j.jpeg" },
//   //                    { name: "Blush – 10 shades available", price: 499, image: "src/assets/a.jpeg" },
//   //                { name: "Makeup – 10 shades available", price: 499, image: "src/assets/b.jpeg" },
//   //                         { name: "Makeup – 10 shades available", price: 499, image: "src/assets/c.jpeg" },
//   //   { name: "Glow Foundation – Warm Beige", price: 899, image: "src/assets/foundation.jpg" },
//   //   { name: "Shimmer Eyeshadow Palette", price: 1299, image: "src/assets/mars.jpg" },
//   //            { name: "Makeup – 10 shades available", price: 499, image: "src/assets/d.jpeg" },
//   //                     { name: "Makeup – 10 shades available", price: 499, image: "src/assets/e.jpeg" },
//   //       { name: "Blush – Coral Glow", price: 699, image: "src/assets/blush.jpg" },
//   //   { name: "Glow Foundation – Warm Beige", price: 899, image: "src/assets/1.png" },
//   //            { name: "Makeup – 10 shades available", price: 499, image: "src/assets/f.jpeg" },
//   //                     { name: "Makeup – 10 shades available", price: 499, image: "src/assets/g.jpeg" },
//   //                              { name: "Makeup – 10 shades available", price: 499, image: "src/assets/h.jpeg" },
//   //   { name: "Shimmer Eyeshadow Palette", price: 1299, image: "src/assets/eyeshadow.jpg" },
//   //   { name: "Blush – Rose Pink", price: 499, image: "src/assets/blush2.jpg" },
//   //            { name: "Makeup – 10 shades available", price: 499, image: "src/assets/i.jpeg" },
//   //   { name: "Glow Foundation – Warm Beige", price: 899, image: "src/assets/2.png" }
//   // ]
//   return (
//   <>
   
//     <Navbar/>
//     <Routes>
//       <Route path="/"element={<Hero/>}/>
//       <Route path="/Banner"element={<Banner/>}/>
//       <Route path="/Categories"element={<Categories/>}/>
//       <Route path="/FeaturedProducts"element={<FeaturedProducts/>}/>
//       <Route path="/Perfect"element={<Perfect/>}/>
//       <Route path="/Testimonials"element={<Testimonials/>}/>
//       <Route path="/ContactForm"element={<ContactForm/>}/>
//       <Route path="/Footer"element={<Footer/>}/>
//       <Route path="/Login"element={<Login/>}/>
//       <Route path="/Search"element={<Search/>}/>
//       <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
//      <Route 
//   path="/productcard" 
//   element={
//     <div style={{
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//       gap: "20px",
//       padding: "40px"
//     }}>
//       {products.map((p) => (
//         <ProductCard key={p.id} product={p} addItem={addItem} />
//       ))}
//     </div>
//   } 
// />
//      {/* <Route 
//           path="/productcard" 
//           element={
//             <div style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//               gap: "20px",
//               padding: "40px"
//             }}>
//               {products.map((p, i) => (
//                 <ProductCard key={i} product={p} addItem={addItem} />
//               ))}
//             </div>
//           } 
//         /> */}
//         {/* <Route 
//   path="/productcard" 
//   element={
//     <div style={{
//       display: "grid",
//       gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
//       gap: "20px",
//       padding: "40px"
//     }}>
//       {products.map((p) => (
//         <ProductCard key={p.id} product={p} addItem={addItem} />
//       ))}
//     </div>
//   } 
// /> */}

//     </Routes>
//     {/* <h1>Hiii</h1>
//     <h2>Welcome please enter your name</h2>
//     <h2>Your Name is: {name}</h2>
// <input type="text" placeholder="Enter name" onChange={(e)=>{setName(e.target.value)}}/>
// <button onClick={Submit}>Add</button>
// <br/>
//  <button onClick={fetchName}>Refresh button</button>
//     {arr.map((n)=>(
//       <h3 key={n.id}>{n.name}<button onClick={()=>normalName(n.id)}>delete</button><button onClick={updateName}>edit</button></h3>
//     ))}
//     <br/>
//     <h2>Thankyou</h2> */}
//     <Banner/>
//     <Footer/>
//     </>
//   );
// }

// export default App


import React, { useState } from "react";
import hearts from './assets/hearts.jpg'
import {Navbar} from './components/Navbar.jsx'
import {Hero} from './components/Hero.jsx'
import {Banner} from './components/Banner.jsx'
import Search from "./components/Search.jsx"
import {Categories} from './components/Categories.jsx'
import {FeaturedProducts} from './components/FeaturedProducts.jsx'
import {Perfect} from './components/Perfect.jsx'
import {Testimonials} from './components/Testimonials.jsx'
import {ContactForm} from './components/ContactForm.jsx'
import {Footer} from './components/Footer.jsx'
import {Login} from './components/Login.jsx'
import {Cart} from './components/Cart.jsx'
import ProductList from "./components/ProductList.jsx";

import ProductCard from './components/ProductCard.jsx'
import {Routes,Route} from "react-router-dom";
function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  // const products = [
  //         { name: "Lipgloss – Rose Pink", price: 499, image: "src/assets/gloss.jpg" },
  //           { name: "Lip gloss – 10 shades available", price: 499, image: "src/assets/j.jpeg" },
  //                    { name: "Blush – 10 shades available", price: 499, image: "src/assets/a.jpeg" },
  //                { name: "Makeup – 10 shades available", price: 499, image: "src/assets/b.jpeg" },
  //                         { name: "Makeup – 10 shades available", price: 499, image: "src/assets/c.jpeg" },
  //   { name: "Glow Foundation – Warm Beige", price: 899, image: "src/assets/foundation.jpg" },
  //   { name: "Shimmer Eyeshadow Palette", price: 1299, image: "src/assets/mars.jpg" },
  //            { name: "Makeup – 10 shades available", price: 499, image: "src/assets/d.jpeg" },
  //                     { name: "Makeup – 10 shades available", price: 499, image: "src/assets/e.jpeg" },
  //       { name: "Blush – Coral Glow", price: 699, image: "src/assets/blush.jpg" },
  //   { name: "Glow Foundation – Warm Beige", price: 899, image: "src/assets/1.png" },
  //            { name: "Makeup – 10 shades available", price: 499, image: "src/assets/f.jpeg" },
  //                     { name: "Makeup – 10 shades available", price: 499, image: "src/assets/g.jpeg" },
  //                              { name: "Makeup – 10 shades available", price: 499, image: "src/assets/h.jpeg" },
  //   { name: "Shimmer Eyeshadow Palette", price: 1299, image: "src/assets/eyeshadow.jpg" },
  //   { name: "Blush – Rose Pink", price: 499, image: "src/assets/blush2.jpg" },
  //            { name: "Makeup – 10 shades available", price: 499, image: "src/assets/i.jpeg" },
  //   { name: "Glow Foundation – Warm Beige", price: 899, image: "src/assets/2.png" }
  // ]
  return (
  <>
    <Navbar/>
    <Routes>
      <Route path="/"element={<Hero/>}/>
      <Route path="/Banner"element={<Banner/>}/>
      <Route path="/Categories"element={<Categories/>}/>
      <Route path="/FeaturedProducts"element={<FeaturedProducts/>}/>
      <Route path="/Perfect"element={<Perfect/>}/>
      <Route path="/Testimonials"element={<Testimonials/>}/>
      <Route path="/Login"element={<Login/>}/>
      <Route path="/ContactForm"element={<ContactForm/>}/>
      <Route path="/Footer"element={<Footer/>}/>
      <Route
  path="/ProductCard"
  element={<ProductList addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />}
/>
     {/* Cart + Search now properly routed */}
       <Route
  path="/search"
  element={<Search addToCart={addToCart} removeFromCart={removeFromCart} cart={cart} />}
/>
<Route
  path="/cart"
  element={<Cart cart={cart} removeFromCart={removeFromCart} />}
/>

      {/* <Route path="/search"element={<Search addItem={addItem}/>}/>
      <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} /> */}
     {/* <Route 
          path="/productcard" 
          element={
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              padding: "40px"
            }}>
              {products.map((p, i) => (
                <ProductCard key={i} product={p} addItem={addItem} />
              ))}
            </div>
          } 
        /> */}
    </Routes>

    <Banner/>
    <Footer/>
    </>
  );
}

export default App