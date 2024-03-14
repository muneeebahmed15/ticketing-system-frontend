import React from 'react'
import { useMyPickTickets } from '../../../logic/actions/_agent'
import AgentPickedRow from '../../components/common/AgentPickedRow';
import PanelHeading from '../../components/common/PanelHeading';
import TicketTable from '../../components/common/TicketTable';


const AgentPickedTickets = () => {
  const {loading, list} = useMyPickTickets();
  return (
    <>
    <PanelHeading title={"List of Picked Tickets"}/>
   
    <TicketTable list={list} loading={loading} from={"picked-ticket"}/>
    
    </>
  )
}

export default AgentPickedTickets