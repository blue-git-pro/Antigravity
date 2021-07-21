import React, { useState } from 'react'
import { Collapse } from 'antd'

const TeamCollapse = ({ items }) => {
  const [currentImage, setCurrentImage] = useState(items[0].imageURL)
  return (
    <>
      <div className="d-flex justify-content-center">
        <img src={currentImage} style={{width: '80px', marginBottom: '50px'}} alt="Item"/>
      </div>
      <Collapse accordion={true} bordered={false} defaultActiveKey={1} onChange={(key) => {
          if(key >= 1) setCurrentImage(items[key-1].imageURL)
        }} className="team-accordion">
        {items.map(({ title, content, imageURL }, idx) => (
          <Collapse.Panel header={title} showArrow={false} key={idx+1} className="no-border">
            <span className="text">{content}</span>
          </Collapse.Panel>
        ))}
      </Collapse>
    </>
  )
}

export default TeamCollapse