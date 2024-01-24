import { Avatar, Button, Card, Input, List } from 'antd'
import React, { useState } from 'react'
import { __useSingleTicket } from '../../logic/actions/_client-ticket'
import { CommentOutlined, DeleteOutlined } from '@ant-design/icons'
import ClientCommentReply from './ClientCommentReply'

const ClientComment = ({comment, setComment,loading, doComment, singleItem, auth, deleteComment}) => {
       
   const [open, setOpen] = useState(false)
   const [currentComment, setCurrentComment] = useState({})
    // const { deleteComment} =__useSingleTicket(id);
  return (
   <>
    <div style={{border:"1px solid lightgrey", borderRadius:"15px", padding:"20px"}}>
        <div className='row'>
        <h5 className='mb-4 '>Comments</h5>
        <hr />
          <div className='col-md-10'>
            <Input.TextArea 
            style={{
              // backgroundColor:"transparent",
              // color:"bl",
              fontWeight:"600",
            }}
            value={comment}
            onChange={(e)=>setComment(e.target.value)}
            />
          </div>
         <div className='col-md-1 mt-2'>
            <Button 
            loading={loading} 
            className='myBtn' 
            onClick={doComment}
            >
              Submit
            </Button>
         </div>

        </div>

            <List style={{backgroundColor:"#191c2q", borderRadius:"10px"}}
            className=' p-2'
            itemLayout='vertical'
            dataSource={singleItem?.comments}
            renderItem={(item,index)=>(
              <List.Item 
              actions={[
                <div className='d-flex justify-content-start align-items-center gap-3' style={{fontSize:"15px"}}>
                <span
                className="text-primary"
                role="button"
                onClick={()=>{
                  setOpen(true);
                  setCurrentComment(item);
                }}
                > <CommentOutlined/> </span>
              <>
              {item.createdBy === auth?.user?._id &&(
                <span className='text-danger' role='button' 
                onClick={()=>deleteComment(item._id)}
                >
                  <DeleteOutlined/>
                </span>
              )}
              </>
              </div>
              ]}
              >
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="https://ant.design">{item.createdBy}</a>}
          description={item.content}
        />
      </List.Item>
    )}
  />

    </div>
    <ClientCommentReply open={open} setOpen={setOpen} currentComment={currentComment}/>
   </>
  )
}

export default ClientComment
