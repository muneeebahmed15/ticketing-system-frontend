import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { useAvailableAgent, useSingleTicket } from '../../../logic/actions/_agent';
import PanelHeading from '../../components/common/PanelHeading';
import TcDetailHead from '../../components/common/TcDetailHead';
import CommentSection from '../../components/common/CommentSection';
import { _AuthContext } from '../../../logic/context/AuthContext';
import { Button, Input, Modal } from 'antd';
import { MinusCircleOutlined } from '@ant-design/icons';



const OpenDetailTicket = () => {
 const {id} =  useParams();
const path = useLocation().pathname;



 const {auth} =_AuthContext();

const [why, setWhy] = useState('');
const [handover, setHandover] = useState(false);


const {loading: userloading, list, handoverTc } = useAvailableAgent(handover);

 const {loading, ticket, doComment, setComment, comment, deleteComment, closeTicket, EscTicket, open, setOpen} = useSingleTicket(id)
  
 const AlertEsc = ()=>{
  let ok = window?.confirm("Are you sure you want to esclate?");
  if(ok)
  {
    setOpen(true)
  }
 }
 
 
 return (
    <>
    <PanelHeading title={loading ? "loading...": "Ticket Detail"}/>
 
    <div className='d-flex justify-content-end mb-2'>

      <Button className='myBtn px-2' icon={<MinusCircleOutlined/>} onClick={AlertEsc}>Escalate Ticket</Button>

      <Button className='myBtn px-2 mx-2' icon={<MinusCircleOutlined/>} onClick={closeTicket}>Resolve Ticket</Button>

   { !path.includes("handover") &&   <Button className='myBtn px-2 mx-2' icon={<MinusCircleOutlined/>} onClick={()=>setHandover(true)}>Handover Ticket</Button> }
    
     </div>

    <TcDetailHead singleItem={ticket}/>

    <CommentSection 
      comment={comment}
       setComment={setComment}
        doComment={doComment}
         loading={loading}
          singleItem={ticket}
           auth={auth}
           deleteComment={deleteComment}
           />

<Modal centered title={ticket?.title} open={open}  onCancel={()=>setOpen(false)} footer={null}>
      <div className='mt-4'>
       <Input.TextArea placeholder='Enter reason here...' value={why} onChange={e=>setWhy(e.target.value)}/>
       <Button className='myBtn mt-2' onClick={()=>EscTicket(id, why)}>Escale to Manager</Button>
       </div>
      </Modal>

      <Modal centered title={"Available Users"} open={handover}  onCancel={()=>setHandover(false)} footer={null}>
      <div className='mt-4'>

      {list?.filter(x=>x._id!== auth?.user?._id).map((x)=>(
        <div key={x._id} className='d-flex justify-content-between align-items-center py-1'>
         
         <div className='d-flex flex-column justify-content-start align-items-start'>
           <b>{x.name}</b>
           <small>{x.email}</small>
           </div>
          <Button className='myBtn' onClick={()=>handoverTc(id,x._id,x.name)}>Handover to {x.name}</Button>
        </div>
      ))}
       </div>
      </Modal>

    
    </>
  )
}

export default OpenDetailTicket