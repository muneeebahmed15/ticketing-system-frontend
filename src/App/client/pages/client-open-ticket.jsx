import React, { useState } from 'react'
import ClientLayout from '../layout'
import PanelHeading from '../../components/PanelHeading'
import { FolderOpenOutlined, FolderOutlined } from '@ant-design/icons'
import { __useOpenTicket } from '../../../logic/actions/_client-ticket'
import RequestDetail from './request-detail'


const ClientOpenTickets = () => {
  const [openDetail, setOpenDetail]=useState(false)
  const [currentItem, setCurrentItem] = useState({})
 const {loading, list} = __useOpenTicket();
  

  return (
    <ClientLayout>
      <PanelHeading icon={<FolderOpenOutlined className="its-icon"/>}
      title={"Open Requests"} />


      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">#{loading && "..."}</th>
              <th scope="col">Title</th>
              <th scope="col">Priority</th>
              <th scope="col">Category</th>
              {/* <th scope="col">Description</th> */}
              <th scope="col">Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {list?.map((x, index)=>(
              <tr  key={x._id}>
              <th scope='row'>{++index}</th>
              <td>{x.title}</td>
              <td>{x.priority} </td>
              <td>{x.category.name}</td>
              <td>{x.status}</td>
              <td role='button'>
              {!openDetail ?<FolderOutlined onClick={()=>{
                setOpenDetail(true)
                setCurrentItem({_id:x._id, title:x.title})
              }}/> :  <FolderOpenOutlined />}
               
                </td>
            </tr>
            ))}
          </tbody>
        </table>

<RequestDetail open={openDetail} setOpen={setOpenDetail} ticket={currentItem}/>

      </div>
    </ClientLayout>
  )
}

export default ClientOpenTickets