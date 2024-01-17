import { useEffect, useState } from "react";
import { _AuthContext } from "../context/AuthContext";
import axios from "axios";


export const __useOpenTicket =() =>{
 const [loading, setLoading]  = useState(false);
 const [list, setList]  = useState([]);
 const {auth} = _AuthContext();
 const authToken = auth && auth?.token;

 const fetchingList = async () =>{
    setLoading(true);
    try {
        const res = await axios.get("ticket/my-opens");
        // console.log(res)
        if(res.status===200){
            setList(res.data.tickets);
        }
    } catch (error) {
        console.log(error)
    }finally{
        setLoading(false)
    }
}


    useEffect(()=>{
        if(authToken){
        fetchingList();
    }
    },[authToken])

    return{ loading , list }
};




export const useResolvedTicket =() =>{}


export const __useSingleTicket =(id)=>{
    console.log(id, "form hook")
    
    
    return{}
}