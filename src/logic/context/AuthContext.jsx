import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const AuthContext = createContext();

export const _AuthContext =()=> useContext(AuthContext); 

const AuthProvider = ({children}) =>{
    const [auth, setAuth] = useState({user:null, token:""})

    // console.log(auth,"from authcoontext")
    
    axios.defaults.baseURL = "http://localhost:8000";
    axios.defaults.headers.common["Cookies"] = auth.token;

    return<AuthContext.Provider value={{auth,setAuth}}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider;