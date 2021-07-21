import React from 'react'
import { Col, Row, Rate, Typography } from 'antd'

const leftLayout = {
  md: { span: 6, offset: 2 },
  xs: { span: 24 }
}

const rightLayout = {
  md: { span:12, offset: 1 },
  xs: { span:22, offset: 1 }
}

const { Title } = Typography

const History = ({
  history
}) => (
  <div class="work">
    <Title level={4}>{history.position}</Title>
    <Rate className="workhistory_star" value={history.rating} disabled allowHalf />
    <div className="date">{history.date}</div>
    <div>{history.feedback}</div>
  </div>
)

export default ({
  histories
}) => {
  return (
    <div className='work'>
      <Row>
        <Col {...leftLayout} align='center'>
          <Title level={3}>Work history</Title>
        </Col>
        <Col {...rightLayout}>
          {(histories || []).map((item) => (<History history={item}/>))}
        </Col>
      </Row>
    </div>
  )
}