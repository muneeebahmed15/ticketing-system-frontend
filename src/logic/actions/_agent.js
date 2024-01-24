import { useEffect, useState } from "react"
import { _AuthContext } from "../context/AuthContext"
import axios from "axios";
import toast from 'react-hot-toast'

export const useBucket = () =>{
    const {auth} = _AuthContext();
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchOpenTickets = async () =>{
        setLoading(true);
        try {
            const res = await axios.get("/ticket");  
           setList(res?.data.tickets);
            // console.log(res,"from agent");
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }
    }

    const authToken = auth && auth?.token;

    useEffect(()=>{
        if(authToken){
        fetchOpenTickets()
    }
    },[authToken])


    const pickAnTicket = async(ticketId)=>{
        setLoading(true);
        try {
            const res = await axios.put("/ticket/pick", {ticketId})
            // console.log(res);
            if(res?.data.msg === "Ticket picked successfully"){
                toast.success("Ticket picked successfully")
                fetchOpenTickets();
            }
        } catch (error) {
            console.log(error)
            toast.error("Failed, try again.")
        }finally{
            setLoading(false)
        }
    }

return {loading, list, fetchOpenTickets, pickAnTicket}

}


export const useMyPickTicket = () =>{
    const {auth} = _AuthContext();
    const [list, setList] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchMyPickTicket = async () =>{
        setLoading(true);
        try {
            const res = await axios.get("/ticket");  
           setList(res?.data.tickets);
            console.log(res,"from useMypickticket");
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false);
        }
    }

    const authToken = auth && auth?.token;
    useEffect(()=>{
        if(authToken){
    fetchMyPickTicket()
    }
    },[authToken])

    

return {loading, list, fetchMyPickTicket}

}