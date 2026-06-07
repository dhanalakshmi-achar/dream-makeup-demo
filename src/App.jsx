import React, { useState } from "react";
import hearts from './assets/hearts.jpg'
import {Navbar} from './components/Navbar.jsx'
import {Hero} from './components/Hero.jsx'
import {Banner} from './components/Banner.jsx'
import {Categories} from './components/Categories.jsx'
import {FeaturedProducts} from './components/FeaturedProducts.jsx'
import {Perfect} from './components/Perfect.jsx'
import {Testimonials} from './components/Testimonials.jsx'
import {ContactForm} from './components/ContactForm.jsx'
import {Footer} from './components/Footer.jsx'
import {Login} from './components/Login.jsx'
import {Cart} from './components/Cart.jsx'
import {ProductCard} from './components/ProductCard.jsx'
import {Routes,Route} from "react-router-dom";
function App() {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (product) => {
    setCartItems([...cartItems, product]);
  }
  const products = [
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
      <Route path="/ContactForm"element={<ContactForm/>}/>
      <Route path="/Footer"element={<Footer/>}/>
      <Route path="/Login"element={<Login/>}/>
      <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
     <Route 
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
        />
    </Routes>
    <Banner/>
    <Footer/>
    </>
  );
}

export default App


