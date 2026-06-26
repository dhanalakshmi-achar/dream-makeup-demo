import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../supabase'

export default function Signup() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    setError('')
    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) { setError(error.message); setLoading(false) }
    else navigate('/')
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

    <div className="page-center">
      <div className="card">
        <h2>Create account</h2>
        <input placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <br/>
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        {error && <p className="error">{error}</p>}
        <br/>
        <button className="btn full" onClick={submit} disabled={loading}>{loading ? 'Creating…' : 'Create account'}</button>
        <p className="switch">Have an account? <Link to="/login">Sign in</Link></p>
     </div>
    </div>
    </div>
    </div>
)
}

{/* const inputStyle = {
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
}; */}