import React from 'react'
import { useMyPickTickets } from '../../../logic/actions/_agent'
import AgentPickedRow from '../../components/common/AgentPickedRow';
import PanelHeading from '../../components/common/PanelHeading';


const AgentPickedTickets = () => {
  const {loading, list} = useMyPickTickets();
  return (
    <>
    <PanelHeading title={"List of Picked Tickets"}/>
   
    <div className='table-responsive'>
        <table className='table'>
          <thead>
            <tr>
              <th scope="col">#{loading && "loading"}</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Priority</th>
              <th scope="col">Created At</th>
              <th scope="col">1st SLA</th>
              <th scope="col">2nd SLA</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
          {list?.map((x,index)=>(
            <AgentPickedRow x={x} index={index}/>
          ))}
          
</tbody>
        </table>


      </div>

    </>
  )
}

export default AgentPickedTickets