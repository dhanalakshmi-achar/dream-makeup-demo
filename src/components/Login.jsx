// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// export function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [agree, setAgree] = useState(false);
//   const [message, setMessage] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!agree) {
//       setMessage("⚠️ Please agree to Terms & Conditions.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setMessage("❌ Passwords do not match!");
//       return;
//     }
// if (password === confirmPassword && agree) {
//   setMessage("✅ Login successful! Welcome back 💖");
//   navigate('./Hero'); // redirect to Hero page
//   <Link to="/Hero" style={{ textDecoration: "none", color: "white" }}>
//     Shop Now 💄
//   </Link>
// }

//   };

//   return (
//     <section style={{
//       minHeight: "100vh",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       background: "  #FFE8EE "
//     }}>
//       <div style={{
//         background: "white",
//         padding: "40px",
//         borderRadius: "12px",
//         boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
//         width: "350px",
//         textAlign: "center"
//       }}>
//         <h2 style={{ marginBottom: "20px", color: "#FF6FAE" }}>Welcome Back 💄</h2>
        
//         <form onSubmit={handleSubmit}>
//           <input 
//             type="email" 
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={inputStyle}
//             required
//           />

//           <input 
//             type="password" 
//             placeholder="Create password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={inputStyle}
//             required
//           />

//           <input 
//             type="password" 
//             placeholder="Confirm password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             style={inputStyle}
//             required
//           />

//           <div style={{ textAlign: "left", marginBottom: "15px" }}>
//             <input 
//               type="checkbox" 
//               checked={agree}
//               onChange={() => setAgree(!agree)}
//             /> I agree to Terms & Conditions
//           </div>

//           <button type="submit" style={buttonStyle}>
//             Login
//           </button>
//         </form>

//         {message && (
//           <p style={{ marginTop: "20px", fontWeight: "bold", color: "#FF6FAE" }}>
//             {message}
//           </p>
//         )}
//       </div>
//     </section>
//   );
// }

// const inputStyle = {
//   width: "100%",
//   padding: "12px",
//   marginBottom: "15px",
//   borderRadius: "8px",
//   border: "1px solid #ccc",
//   fontSize: "1rem"
// };

// const buttonStyle = {
//   width: "100%",
//   padding: "12px",
//   borderRadius: "8px",
//   border: "none",
//   background: "#FF6FAE",
//   color: "white",
//   fontWeight: "bold",
//   cursor: "pointer",
//   transition: "all 0.3s ease"
// };

 
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// import { signIn } from '../auth'
import {supabase} from '../supabase.js'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const submit = async () => {
    try {
      await supabase.auth.signInWithPassword({email, password}) //important
      navigate('/')
    } catch (e) {
      setError(e.message)
    }
  }

  return (
    
    <div  className="page-center" style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "  #FFE8EE "
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        width: "350px",
        textAlign: "center"
      }}>
        <h2 style={{ marginBottom: "20px", color: "#FF6FAE" }}>Welcome Back 💄</h2>

      <div className="card">
        <h2>Sign in</h2>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <br/>
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        {error && <p className="error">{error}</p>}
        <button className="btn full" onClick={submit}>Sign in</button>
        <p className="switch">No account? <Link to="/Signup">Sign up</Link></p>
      </div>
    </div>
    </div>
  )
}
const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#FF6FAE",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "all 0.3s ease"
};