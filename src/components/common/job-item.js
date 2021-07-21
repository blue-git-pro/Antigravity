import React from 'react'
import { List, Row } from 'antd'

export default ({ 
  item,
  onClickItem 
}) => {
  const {
    id,
    title,
    content,
    date
  } = item
  
  return (
    <List.Item 
      className='list-item-job'
      onClick={() => onClickItem(id)}
    >
      <Row>
        <Row className='row-title title-name'>{title}</Row>
        <Row style={{ marginTop: 10, color: 'grey' }}>{date}</Row>
      </Row>
      <Row style={{ marginTop: 15 }}>{content}</Row>
    </List.Item>
  )
}