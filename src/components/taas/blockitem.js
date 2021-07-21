import React from 'react'
import {Col} from 'antd'

const BlockItem = ({title,semiTitle,content}) => {
  return(
    <Col className='blockitem' sm={24} md={12} lg={12}>
      <span className='head'>
        <span className='title'>{title}</span>
        <span className='semititle'>{semiTitle}</span>
      </span>
      <span>{content}</span>
    </Col>
  )
}
export default BlockItem