import React, { useEffect, useState } from 'react'
import { _AuthContext } from '../../../logic/context/AuthContext';
import Redirecting from '../../../logic/utils/Redirecting';
import Layout from '../../components/layout';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const ClientRoutes = () => {
    const {auth} = _AuthContext();
    const [loading, setLoading] = useState(true);

    const fetchingCurrentUser  = async ()=>{
        setLoading(false);
        try {
            const res = await axios.get("auth/current-client");
       console.log(res)
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
        <Layout >
            <Outlet/>
        </Layout>
    )
    };

export default ClientRoutes