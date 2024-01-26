import React from 'react'

import { useBucket } from '../../../logic/actions/_agent'
import {Button} from 'antd'
import {ReloadOutlined} from '@ant-design/icons'
import PanelHeading from '../../components/common/PanelHeading'
import AgentBucketRow from '../../components/common/AgentBucketRow'


const Bucket = () => {
  const {loading, list, fetchOpenTickets, pickAnTicket} = useBucket();
  

  return (
    <>
    <PanelHeading title={"Bucket"}/>

      <div className='d-flex justify-content-end'>
        <Button icon={<ReloadOutlined/>}  onClick={fetchOpenTickets}>Reload</Button>
      </div>
    
      <small>Red Background means, 1st SLA has breached</small>
      
      <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">#{loading && "loading"}</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Priority</th>
              <th scope="col">Created At</th>
              <th scope="col">Timer</th>
              <th></th>
            </tr>
          </thead>
          {list?.map((x,index)=>(
          <AgentBucketRow x={x} index={index} pickAnTicket={pickAnTicket}/>
          ))}
        </table>


      </div>
    </>
  )
}

export default Bucket
