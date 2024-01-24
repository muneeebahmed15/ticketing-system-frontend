import React, { useEffect, useState } from 'react'
import { _AuthContext } from '../../../logic/context/AuthContext'
import axios from 'axios';
import Redirecting from '../../../logic/utils/Redirecting';
import AgentLayout from '../layout';
import { Outlet } from 'react-router-dom';

const AgentRoutes = () => {
    const {auth} = _AuthContext();
    const [loading, setLoading] = useState(true);

    const fetchingCurrentUser  = async ()=>{
        setLoading(false);
        try {
            const res = await axios.get("auth/current-agent");
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(()=>{
        if(auth?.token){
            fetchingCurrentUser();
        }
    },[auth && auth?.token]);


  return loading? (
    <Redirecting/>):(
        <AgentLayout>
            <Outlet/>
        </AgentLayout>
    )
    };


export default AgentRoutes;
