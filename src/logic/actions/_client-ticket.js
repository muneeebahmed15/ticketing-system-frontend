import { useEffect, useState } from "react";
import { _AuthContext } from "../context/AuthContext";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";



export const __useOpenTicket =() =>{
 const [loading, setLoading]  = useState(false);
 const [list, setList]  = useState([]);
 const {auth} = _AuthContext();
 const authToken = auth && auth?.token;

 const fetchingList = async () =>{
    setLoading(true);
    try {
        const res = await axios.get("ticket/my-opens");
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
};

//other  option
export const __useGetList =(url) =>{
    const [loading, setLoading]  = useState(false);
    const [list, setList]  = useState([]);

    const {auth} = _AuthContext();
    const authToken = auth && auth?.token;
   
    const fetchingList = async () =>{
       setLoading(true);

       try {
           const res = await axios.get(url);
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



export const useResolvedTicket =() =>{
    const [loading, setLoading]  = useState(false);
    const [list, setList]  = useState([]);

    const {auth} = _AuthContext();
    const authToken = auth && auth?.token;
   
    const fetchingList = async () =>{
       setLoading(true);

       try {
           const res = await axios.get("ticket/resolved-ticket");
           console.log(res)
           if(res.status===200){
            //    setList(res.data.tickets);
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


export const __useSingleTicket =(id)=>{
    const {auth} = _AuthContext();
 const authToken =    auth && auth?.token;

 const router = useNavigate();

 const [singleItem, setSingleItem] = useState({})
 const [loading, setLoading] = useState(false)
 

 const [comment, setComment] = useState("")

    // console.log(id, "form hook");
    // console.log(singleItem.title,"from  hook too");

    const fetchSingleTicket = async () =>{
        setLoading(true);
        try {
            const res = await axios.get(`/ticket/single/${id}`);
            //  console.log(res)
            if(res.status===200){
                setSingleItem(res.data.singleTicket);
            }
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }
    
    
        useEffect(()=>{
            if(authToken && id){
                fetchSingleTicket();
        }
        },[authToken, id])
    
        
       const doComment = async () =>{
            setLoading(true);
            try {
                const res = await axios.put("/ticket/add-comment",{ticketId: id, content:comment });
                 console.log(res)
                if(res.status===200){
                    toast.success("Comment Posted");
                    fetchSingleTicket()
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
                    setSingleItem((prev)=>({...prev, comments: singleItem.comments.filter((x)=>x._id !==commentId)}))
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
                    router("/client/resolved-request")
                    }
            } catch (error) {
                console.log(error);
                toast.error("Failed, try again.");
            }
            finally{
                setLoading(false);
            }
        }
    
    return{ loading, singleItem, comment, setComment, doComment, deleteComment, closeTicket}
}