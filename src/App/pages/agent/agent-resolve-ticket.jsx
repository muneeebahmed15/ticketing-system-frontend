import React from 'react'
import { useResolvedTicket } from '../../../logic/actions/_agent'
import PanelHeading from '../../components/common/PanelHeading'
import { Button, Card, Tag } from 'antd'
import SmallItems from '../../components/common/SmallItems'
import { FolderOpenOutlined } from '@ant-design/icons'


const ResolvedBy = (x)=>{
  return x.ceatedBy = x.resolvedBy ? "Me" : x.ResolvedBy
}

const AgentResolveTicket = () => {

    const {loading, list} = useResolvedTicket("ticket/resolved-tickets")
    return (
      <>
      <PanelHeading title={loading? "Loading...":"Resolved Tickets"} icon={<FolderOpenOutlined className='its-icon'/>}/>
    
     
      <div className="d-flex flex-column justify-content-start gap-3">
         {list.map((x)=>(
       <Card key={x._id} hoverable>
        <div className="d-flex justify-content-between align-items-enter">
          <h5>{x.title}</h5>
          <Tag color="purple">{x.resolvedAt.slice(0,10)}</Tag>
        </div>
  
        <p style={{maxWidth:"90%"}}>{x.description}</p>
  
       <div className="mt-3">
        <SmallItems title={"Category"} content={x.category}/>
        <SmallItems title={"Resolved By"} content={(ResolvedBy(x))}/>
        <SmallItems title={"Comments"} content={"content"}/>
        </div>
  
        <div className="mt-3 pt-3 border-top">
          <Button icon={<FolderOpenOutlined/>} className="myBtn"> Claim to reopen</Button>
        </div>
        </Card>
  ))}
      
  
      </div>
      </>
    )
}

export default AgentResolveTicket