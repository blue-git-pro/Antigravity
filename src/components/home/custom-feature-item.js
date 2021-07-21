import React from 'react'
import { Col, Button } from 'antd'

const CustomFeatureItem = ({ title, content }) => {

  return (
    <Col md={8} xs={24} className="custom-feature-item">
      <div style={{padding:'0px 30px 80px 30px'}} className="custom-feature-item-content">
        <span className="head">{title}</span>
        <span className="text">{content}</span>
      </div>
      <center style={{marginTop:'-50px'}}>
        <Button type="danger" shape="round">LEARN MORE</Button>
      </center>
    </Col>
  )
}

export default CustomFeatureItem