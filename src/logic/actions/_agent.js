import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { _AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom";


export const useBucket = () => {
  const {auth} = _AuthContext();
  const authToken = auth && auth?.token;

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchOpenTickets = async () => {
    setLoading(true);
    try {
      const res = await axios.get("/ticket");
      // console.log(res);
      setList(res?.data.tickets);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (authToken) {
      fetchOpenTickets();
    }
  }, [authToken]);

  // pick any tikcet
  const pickAnTicket = async (ticketId) => {
    setLoading(true);
    try {
      const res = await axios.put("/ticket/pick", { ticketId });
      fetchOpenTickets();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    list,
    fetchOpenTickets,
    pickAnTicket,
  };
};

export const useMyPickTickets = () => {
  // ticket/my-picks

  const {auth} = _AuthContext();
  const authToken = auth && auth?.token;

  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMyPickTickets = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get("/ticket/my-picks");
      // console.log(res);
      setList(res?.data.tickets);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [authToken]);

  useEffect(() => {
    fetchMyPickTickets();
  }, [fetchMyPickTickets]);

  return {
    loading,
    list,
  };
};

export const useSingleTicket = (id) => {
  const {auth} = _AuthContext();
  const authToken = auth && auth?.token;
  const router = useNavigate()

  const [ticket, setTicket] = useState({});
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const [comment, setComment] = useState("")

// console.log("helloooooo agent usesingleticket")

  const fetchingSingleTicket = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/ticket/single-ticket/${id}`);
      // console.log(res);
      setTicket(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id && authToken) 
    fetchingSingleTicket();
  }, [id, authToken]);


  const EscTicket = async (ticketId, why) => {
    if (!why) {
      return toast.error("Please write something..");
    }
    setLoading(true);
    try {
      const res = await axios.put("ticket/escalate", { ticketId, why });
      console.log(res.status)
      if(res.status === 200){
        toast.success("Ticket escalated to manager");
        router("/agent/picked-tickets")
        setOpen(false);
      }
     } catch (error) {
      console.log(error);
      toast.error("Error! Please try again");
    } finally {
      setLoading(false);
    }
  };

  const doComment = async () =>{
    setLoading(true);
    try {
        const res = await axios.put("/ticket/add-comments",{ticketId: id, content:comment });
         console.log(res)
        if(res.status===200){
            toast.success("Comment Posted");
            fetchingSingleTicket()
            setComment("")
        }
    } catch (error) {
        console.log(error)
    }finally{
        setLoading(false)
    }
}

const deleteComment = async(commentId) =>{
  setLoading(true);
  try {
      // const data = await axios.delete(`/delete/comment/${commetId}`)
  //    console.log(data)
      // if(data.ok){
          toast.success("Comment deleted.")
          setTicket((prev)=>({...prev, comments: ticket.comments.filter((x)=>x._id !==commentId)}))
      // }
  } catch (error) {
      console.log(error);
      toast.error("Failed, try again.");
  }
  finally{
      setLoading(false);
  }
}


const closeTicket = async() =>{
  setLoading(true);
  try {
      const res = await axios.put(`/ticket/update-to-resolved/${id}`)
     console.log(res)
      if(res.status ===200){
          toast.success(res.data.msg)
          router("/agent/resolved-tickets")
          }
  } catch (error) {
      console.log(error);
      toast.error("Failed, try again.");
  }
  finally{
      setLoading(false);
  }
}



  return {
    loading,
    ticket,
    EscTicket,
    doComment,
    setComment,
    comment,
    deleteComment,
    closeTicket,
    open,
    setOpen
  };
};


export const useResolvedTicket =() =>{
  const [loading, setLoading]  = useState(false);
  const [list, setList]  = useState([]);

  const {auth} = _AuthContext();
  const authToken = auth && auth?.token;
 
  const fetchingList = async () =>{
     setLoading(true);

     try {
         const res = await axios.get("ticket/resolved-tickets");
         console.log(res)
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
}

export const useAvailableAgent = (isOpen) =>{
 const [loading, setLoading] = useState(false);
 const [list, setList] =  useState([]);
 const router = useNavigate();

 const fetchUserData = async()=>{
  setLoading(true);
  try {
    const res = await axios.get("user/available-for-handover")
    if(res.status === 200){
      setList(res.data.users)
    }
  } catch (error) {
    console.log(error)
  }finally{
    setLoading(false)
  }
}

 useEffect(()=>{
  if(isOpen){
fetchUserData()
  }

 },[isOpen])


let reason ="no reason"

 const handoverTc =  async(ticketId, newAgentId,  name)=>{
setLoading(true);
  try {
      const res = await axios.put("ticket/handover-ticket",{ticketId, newAgentId, reason})
      toast.success(`Ticket handover to ${name}`)
      router("/agent/picked-tickets")
  } catch (error) {
    console.log(error)
  }finally{
    setLoading(false)
  }
 }


 return{
  loading, list, handoverTc
 }
}