import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./common/home"
import Login from "./common/login"
import ClientDashboard from './client/pages/client-dashboard';
import ClientOpenTickets from './client/pages/client-open-ticket';
import ClientSubmitTicket from './client/pages/client-submit-ticket';
import ClientResolvedTicket from './client/pages/client-resolved-ticket';
import RequestDetail from './client/pages/request-detail';
import AgentRoutes from './agent/pages/agent-routes';
import AgentDashboard from './agent/pages/agent-dashboard';
import Bucket from './agent/pages/bucket';
import AgentPickedTickets from './agent/pages/agent-picked-tickets';

const App = () => {
  return (
    <>
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>

//Client Routes
<Route path='/client' element={<ClientDashboard/>}/>
<Route path='/client/submit-requests' element={<ClientSubmitTicket/>}/>
<Route path='/client/open-requests' element={<ClientOpenTickets/>}/>
<Route path='/client/resolved-requests' element={<ClientResolvedTicket/>}/>
<Route path='/client/profile' element={<ClientOpenTickets/>}/>
<Route path='/client/request-detail/:id' element={<RequestDetail/>}/> 



<Route path='/agent' element={<AgentRoutes/>}>
  <Route path='/agent/dashboard' element={<AgentDashboard/>}/>
  <Route path='/agent/bucket' element={<Bucket/>}/>
  <Route path='/agent/picked-tickets' element={<AgentPickedTickets/>}/>
</Route>

 </Routes>
 </BrowserRouter>
 </>
  )
}

export default App