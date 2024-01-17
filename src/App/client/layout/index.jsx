import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, _AuthContext } from '../../../logic/context/AuthContext'
import { useNavigate } from 'react-router-dom';
import LeftCol from './leftcol';
import LayoutHeader from './layoutheader';
import { Card, Col, Row } from "antd";
import axios from "axios"
import Redirecting from '../../../logic/utils/Redirecting';


const ClientLayout = ({children}) => {

  const {auth} = _AuthContext();
  const [loading, setLoading] = useState(true)
  const router = useNavigate();
    
  //   useEffect (()=>{
  //   if(!auth?.token){
  //     if(auth?.user?.role!=="agent")
  //      {
  //     return  router("/login")}
  //   }
  // },[auth ]);

  const fetchingCurrentUser = async() =>{
    try {
      const res = await axios.get("auth/current-client");
      // console.log(res);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    if(auth?.token){
    fetchingCurrentUser()
  }
  // else{
  //   router("/login")
  // }
  },[auth && auth?.token]);


  return (
    <>
    {loading? <Redirecting/>:
    <Row style={{ minHeight: "100vh" }} className={"main-db_layout"}>
      <Col md={4} xs={0} className="fixedColumn leftColumn border-end">
        <LeftCol />
      </Col>
      <Col md={20} xs={24} className="centerColumn ">
        <LayoutHeader />
        <div className="p-3"> <Card>{children}</Card></div>
      </Col>
    </Row>
    }
  </>
  )
}

export default ClientLayout