import React, { useState } from 'react'
import ClientLayout from '../layout'
import { SnippetsOutlined } from '@ant-design/icons'
import PanelHeading from '../../components/PanelHeading'
import { Button, Card, Form, Input, Select } from 'antd'
import { _useCategories } from '../../../logic/actions/_categories'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from "react-hot-toast"

const {Option} = Select;

const ClientSubmitTicket = () => {
  const router = useNavigate();
  const [loading, setLoading] = useState(false)
  const {categories, loading: catsLoading} = _useCategories(); 

  const onFinish = async(values) =>{
    setLoading(true)
    try {
      const res = await axios.post(`ticket/create`,values);
      // console.log(res)
      if(res.status ===201)
      {
        toast.success("Ticket Created Successfully");
        router("/client/open-requests")
      }
    } catch (error) {
      console.log(error)
      toast.error("Failed, please try again later")
    }
    finally
    {
      setLoading(false)
    }
  }

  return (
    <ClientLayout>
    <PanelHeading icon={<SnippetsOutlined  className='its-icon'/>}
     title={"Submit Request"} para={"I am submit request"}/>
     
      <Form layout='vertical' name="submit-request" onFinish={onFinish}>
     
      <div className="row">
      <div className='col-md-6'>
        <Form.Item name={"title"} label="Title"
        rules={[{required:true, message:"Please enter title"}]}>
         <Input placeholder='Enter title here'/>
        </Form.Item>
      </div>
      <div className='col-md-6'>
      <Form.Item name={"description"} label="description"
        rules={[{required:true, message:"Please enter description"}]}>
         <Input.TextArea placeholder='Enter description here'/>
        </Form.Item>
      </div>
      </div>

      <div className="row">
      <div className='col-md-6'>
        <Form.Item name={"category"} label={`Category ${catsLoading ? "...":""}`}
        rules={[{required:true, message:"Please select category"}]}>
         <Select placeholder="Select a category">
         {categories.map((x)=>(
         <Option key={x._id} value={x._id}>{x.name}</Option>))}
         </Select>
        </Form.Item>
      </div>
      <div className='col-md-6'>
      <Form.Item name={"priority"} label="Priority"
        rules={[{required:true, message:"Please select priority"}]}>
         <Select placeholder="Select a category">
         
         <Option  value={"Low"}>Low</Option>
         <Option  value={"Medium"}>Medium</Option>
         <Option  value={"High"}>High</Option>
         <Option  value={"Critical"}>Critical</Option>

         </Select>
        </Form.Item>
      </div>
      </div>
      <div className="d-flex">
      <Button className='myBtn' loading={loading} htmlType='submit'>Submit</Button>
      </div>
      </Form>
    </ClientLayout>
  )
}

export default ClientSubmitTicket