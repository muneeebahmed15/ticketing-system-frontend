import React, { useState } from 'react'
import { __useSingleTicket } from '../../../logic/actions/_client-ticket'
import { useParams } from 'react-router-dom'
import ClientLayout from '../layout';
import PanelHeading from '../../components/PanelHeading';
import { Avatar, Button, Card, Divider, Grid, Input, List } from 'antd';
import { _AuthContext } from '../../../logic/context/AuthContext';
import ClientComment from '../../components/ClientComment';

const {useBreakpoint} =Grid

const RequestDetail = () => {
  const {id} = useParams();
  const {auth} = _AuthContext()

    const {loading, singleItem, setComment, comment, doComment, deleteComment} = __useSingleTicket(id)
    
     
    // console.log(singleItem,"heloooooooooooooooooooo");
//  const {title} = singleItem;
return (
    <ClientLayout>
      <PanelHeading title={loading? "Loading...":"Ticket Information"} want={"no-para"}/>
     
{/* <Descriptions layout='vertical' bordered>
<Descriptions.Item label="Title">{singleItem?.title}</Descriptions.Item>
<Descriptions.Item label="Description">{singleItem?.description}</Descriptions.Item>
<Descriptions.Item label="Title">{singleItem?.priority}</Descriptions.Item>
<Descriptions.Item label="Category">{singleItem?.category?.name}</Descriptions.Item>
<Descriptions.Item label="Status"><Tag>{singleItem?.status }</Tag></Descriptions.Item>
</Descriptions> */}

<div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              {/* <th scope="col">#{loading && "..."}</th> */}
              <th scope="col">Title</th>
              <th scope="col" className='d-none d-md-block'>Description</th>
              <th scope="col">Priority</th>
              <th scope="col">Category</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
           
              <tr >
              {/* <th scope='row'>{++index}</th> */}
              <td>{singleItem?.title}</td>
              {/* {!useBreakpoint().md && <td className='d-none d-md-block'>{singleItem?.description}</td>} */}
              <td className='d-none d-md-block'>{singleItem?.description}</td>
              <td>{singleItem?.priority} </td>
              <td>{singleItem?.category?.name}</td>
              <td>{singleItem?.status}</td>
              
            </tr>
          
          </tbody>
        </table>


      </div>

      <Divider/>
      
      <ClientComment 
      comment={comment}
       setComment={setComment}
        doComment={doComment}
         loading={loading}
          singleItem={singleItem}
           auth={auth}
           deleteComment={deleteComment}/>


    </ClientLayout>
  )
}

export default RequestDetail