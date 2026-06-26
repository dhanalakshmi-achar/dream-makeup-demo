// import { useEffect, useState } from 'react'
// import { Navigate } from 'react-router-dom'
// import { supabase } from "../supabase.js"

// export default function Protected({ children }) {
//   const [user, setUser] = useState(undefined)

// // ✅ Option 1 — use .then() (what we're using)
// useEffect(() => {
//   supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null))
// }, [])

// // ✅ Option 2 — define async inside, then call it
// useEffect(() => {
//   const check = async () => {
//     const { data } = await supabase.auth.getSession()
//     setUser(data.session?.user ?? null)
//   }
//   check()
// }, [])

//   if (user === undefined) return <p>Loading…</p>
//   if (!user) return <Navigate to="/login" replace />
//   return children
// }

import { supabase } from "../supabase.js";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Protected({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>; // show while checking session
  }

  if (!user) {
    return <Navigate to="/login" replace />; // force redirect if not logged in
  }

  return children; // allow access if logged in
}
