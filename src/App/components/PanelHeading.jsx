import { SnippetsOutlined } from '@ant-design/icons'
import Title from 'antd/es/skeleton/Title'
import React from 'react'

const PanelHeading = ({icon, title, para}) => {
  return (
    <>
      <div className="d-flex justify-content-start align-items-center gap-2 _heading" >
      <div>
        {icon} 
        </div>
      <div className='d-flex flex-column'>
       <b> {title}</b>
       <small><i>{para ? para : "Weather is very cold here"}</i></small>
      </div>
    </div>
    </>
  )
}

export default PanelHeading
