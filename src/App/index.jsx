import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./common/home"
import Login from "./common/login"
import ClientDashboard from './client/pages/client-dashboard';
import ClientOpenTickets from './client/pages/client-open-ticket';
import ClientSubmitTicket from './client/pages/client-submit-ticket';
import ClientResolvedTicket from './client/pages/client-resolved-ticket';

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

 </Routes>
 </BrowserRouter>
 </>
  )
}

export default App