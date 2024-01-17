import React from 'react'
import {Modal} from 'antd'
import { __useSingleTicket } from '../../../logic/actions/_client-ticket'

const RequestDetail = ({open, setOpen, ticket}) => {
    const{} = __useSingleTicket(ticket._id)

  return (
    <>
    <Modal
        title={ticket.title}
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

export default RequestDetail