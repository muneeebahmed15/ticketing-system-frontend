import React from 'react'
import PanelHeading from '../../components/PanelHeading'
import { useMyPickTicket } from '../../../logic/actions/_agent'

const AgentPickedTickets = () => {
  const {loading, list} = useMyPickTicket();
  return (
    <>
    <PanelHeading title={"Picked Tickets"}/>
    

    </>
  )
}

export default AgentPickedTickets