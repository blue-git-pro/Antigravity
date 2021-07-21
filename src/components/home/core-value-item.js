import React from 'react'
import { Row, Col } from 'antd'

const CoreValueItem = ({title, title1, title2, content, stat, isLeft}) => {
  return (
    <Col md={12} xs={24} className={"core-value-item-container " + (isLeft ? 'grey left-core-value-item' : '')}>

      <span className="head" style={{textAlign:"left", lineHeight:'1.0'}}>
        <b>{title}</b><br/>
        {title1}<span className="red">{title2}</span>
      </span>
      <span className="text">
      {content}
      </span>

      <Row className="mt-20">
        {stat.map((data, idx) => (
          <Col md={12} xs={24} className="left-bar" key={'core-value-item-stat-' + title + '-' +idx}>
            <span style={{fontSize:'45px'}}>{data.figure}</span><br/>
            <span style={{fontSize:'17px'}}>{data.des}</span>
          </Col>
        ))}
      </Row>
    </Col>
  )
}

export default CoreValueItem