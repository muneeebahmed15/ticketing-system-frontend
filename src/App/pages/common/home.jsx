import React, { useContext, useEffect } from 'react'
import {Link, useNavigate} from "react-router-dom"
import { AuthContext, _AuthContext } from '../../../logic/context/AuthContext'
import { _useLogin } from '../../../logic/actions/_common'

const Home = () => {
  const {logout} = _useLogin();
  const {auth, setAuth} = _AuthContext();
  
  // useEffect(()=>{
  // if(auth?.token){
  //   router("/")
  //  }
  // },[auth?.token])

  const role = auth?.user?.role;
  const desc = `Helloo from ${role}`

  return (
    <div>
      {auth?.token?( <div>
       {role ==="agent"? desc : role==="client"? desc : role === "admin" ? desc : ""} 
       <button onClick={logout}>Logout</button>
        </div>)
      :(<div>
        {console.log("Hello after logout")}
      <Link to="/login"> <button>Login</button></Link>
      </div>)}
    </div>
  )
}

export default Home
