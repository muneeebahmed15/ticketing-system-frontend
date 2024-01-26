import React, { useState } from 'react'
import { __useSingleTicket } from '../../../logic/actions/_client-ticket'
import { useParams } from 'react-router-dom'
import { Button, Divider, Grid } from 'antd';
import { _AuthContext } from '../../../logic/context/AuthContext';
import PanelHeading from '../../components/common/PanelHeading';
import TcDetailHead from '../../components/common/TcDetailHead';
import { MinusCircleOutlined } from '@ant-design/icons';
import CommentSection from '../../components/common/CommentSection';

const {useBreakpoint} =Grid

const RequestDetail = () => {
  const {id} = useParams();
  const {auth} = _AuthContext()

    const {loading, singleItem, setComment, comment, doComment, deleteComment, closeTicket} = __useSingleTicket(id)
    
     
    // console.log(singleItem,"heloooooooooooooooooooo");
//  const {title} = singleItem;
return (
    <>
      <PanelHeading title={loading? "Loading...":"Ticket Information"} want={"no-para"}/>
     
     <div className='text-end mb-2'>
      <Button className='myBtn' icon={<MinusCircleOutlined/>} onClick={closeTicket}>Resolve Ticket</Button>
     </div>


<TcDetailHead singleItem={singleItem}/>

      <Divider/>
      
      <CommentSection 
      comment={comment}
       setComment={setComment}
        doComment={doComment}
         loading={loading}
          singleItem={singleItem}
           auth={auth}
           deleteComment={deleteComment}/>


    </>
  )
}

export default RequestDetail