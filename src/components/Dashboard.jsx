import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabase.js'

export default function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null) 

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null))
     load() }, [])

 const load = async () => {
    const { data } = await supabase
      .from('money')
      .select('*')
      .order('created_at', { ascending: false })
    setMoney(data || [])
  }
  return (
    <div className="dashboard">
      <header className="dash-header"> 
        <div className="dash-user">
          {/* <span>{user?.email}</span> */}
          <button className="btn btn-ghost sm" onClick={() => supabase.auth.signOut().then(() => navigate('/Login'))}>Sign out</button>
        </div>
         
      </header>
      
    
     
    </div>
  )
}

 