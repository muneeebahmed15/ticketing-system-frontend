import { __UseReopenTc, __useGetList } from "../../../logic/actions/_client-ticket"
import PanelHeading from "../../components/common/PanelHeading"
import {FolderOpenOutlined} from '@ant-design/icons';
import { Button, Card, Col, Row, Tag } from "antd";
import SmallItems from "../../components/common/SmallItems";


const ResolvedBy = (x)=>{
  return x.ceatedBy = x.resolvedBy ? "Me" : x.ResolvedBy
}

const ClientResolvedTicket = () => {
 const {loading, list} = __useGetList("ticket/resolved-tickets")
 const {toReopenTc, loading:reopenLoading} = __UseReopenTc();
  return (
    <>
    <PanelHeading title={loading? "Loading...":"Resolved Tickets"} icon={<FolderOpenOutlined/>}/>
  
   
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
        <Button icon={<FolderOpenOutlined/>} className="myBtn" loading={reopenLoading} onClick={()=>toReopenTc(x._id  )}> Claim to reopen</Button>
      </div>
      </Card>
))}
    

    </div>
    </>
  )
}
export default ClientResolvedTicket