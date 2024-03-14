import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from './pages/common/home';
import Login from './pages/common/login';
import { ClientDashboard, ClientOpenTickets, ClientResolvedTicket, ClientRoutes, ClientSubmitTicket, RequestDetail } from './pages/client';
import { AgentDashboard, AgentPickedTickets, AgentResolveTicket, AgentRoutes, Bucket, HandoverTicket, OpenDetailTicket } from './pages/agent';



const App = () => {
  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/login' element={<Login />}/>

//Client Routes
<Route path='/client' element={<ClientRoutes/>}>
<Route path='dashboard' element={<ClientDashboard/>}/>
<Route path='submit-request' element={<ClientSubmitTicket/>}/>
<Route path='open-request' element={<ClientOpenTickets/>}/>
<Route path='resolved-request' element={<ClientResolvedTicket/>}/>
<Route path='profile' element={<ClientOpenTickets/>}/>
<Route path='request-detail/:id' element={<RequestDetail/>}/> 
</Route>


//Agent Routes
<Route path='/agent' element={<AgentRoutes/>}>
  <Route path='dashboard' element={<AgentDashboard/>}/>
  <Route path='bucket' element={<Bucket/>}/>
  <Route path='picked-tickets' element={<AgentPickedTickets/>}/>
  <Route path='resolved-tickets' element={<AgentResolveTicket/>}/>
  <Route path='detail/:id' element={<OpenDetailTicket/>}/>
  <Route path='handover-to-me' element={<HandoverTicket/>}/>
  <Route path='handover/detail/:id' element={<OpenDetailTicket/>}/>
</Route>

 </Routes>
 </BrowserRouter>
 </>
  )
}

export default App