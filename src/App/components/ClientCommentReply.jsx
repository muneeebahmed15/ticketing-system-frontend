import { Modal } from 'antd'
import React from 'react'

const ClientCommentReply = ({open, setOpen, currentComment}) => {




  return (
    <>
       <Modal  
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  )
}

export default ClientCommentReply
