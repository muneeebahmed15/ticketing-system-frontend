import React, { useContext, useEffect } from 'react'
import { _useLogin } from '../../../logic/actions/_common'
import { _AuthContext } from '../../../logic/context/AuthContext';
import { redirect, useNavigate } from 'react-router-dom';

const Login = () => {
  const {auth} = _AuthContext();
  const router = useNavigate();
  
 const{submit, changeHandler, loginData, loading} = _useLogin();
 
const rolesss = auth?.redirectTo;
console.log(rolesss)

 useEffect(()=>{
  if(auth?.token){
    router(`/${rolesss}`)
   }
 },[auth])

// console.log(auth,"abc")

 return (
    <div style={{minHeight:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div style={{width:"300px",border:"1px solid lightgrey", padding:"10px", borderRadius:"10px"}}>
        <h2>Login</h2>
        {JSON.stringify(auth)}
        <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
          <input type="text" name='email' value={loginData.email} onChange={changeHandler} />
          <input type="password" name='password' value={loginData.password} onChange={changeHandler}/>
          <button onClick={submit}>{loading ? "loading...": "Login"}</button>
        </div>
        </div></div>
  )
}

export default Login