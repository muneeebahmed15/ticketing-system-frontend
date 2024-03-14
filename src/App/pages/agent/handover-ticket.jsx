import React from 'react'
import PanelHeading from '../../components/common/PanelHeading'
import { __useGetList } from '../../../logic/actions/_client-ticket'
import AgentPickedRow from '../../components/common/AgentPickedRow'
import TicketTable from '../../components/common/TicketTable'

const HandoverTicket = () => {
 const {loading, list} = __useGetList("ticket/handover-to-me")
  return (
  <>
  <PanelHeading title={"Tickets handover to me"}/>
  
       <TicketTable list={list} loading={loading} from={"handover"}/>

  </>
  )
}

export default HandoverTicket