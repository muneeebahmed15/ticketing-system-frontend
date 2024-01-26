import { useContext, useState } from "react"
import axios from "axios"
import {AuthContext, _AuthContext} from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"


export const _useLogin = () =>{
    const {auth, setAuth} = _AuthContext();
    const router = useNavigate()
 const [loginData, setLoginData] =  useState(
    {email:"",password:"hadi.."});
    const [loading, setLoading] = useState(false);

 const changeHandler = (e) =>{
    setLoginData({...loginData, [e.target.name]:e.target.value});
 }

 //login
 const submit = async()=>{
    setLoading(true);
    try {
        const res = await axios.post("auth/signin",loginData);
    //    console.log(res.data,"from commonjs");
        if(res.status === 200)
        {
          setAuth(res.data);
       Cookies.set("auth",JSON.stringify(res.data))  
        // setLoginData({email:"",password:""})
            // router("/")
        }

    } catch (error) {
        console.log(error)
    }finally{
        setLoading(false);
    }
 }

 //logout
const logout =() =>{
    Cookies.remove("auth");
    setAuth({user:null, token:""})
    console.log("logout")
    router("/")
}

 return {
    changeHandler,submit,loginData,loading,logout
 };
}