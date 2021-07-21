import React from 'react'
import { Col, Row, Button, Space, Typography } from 'antd'
import { EditOutlined } from '@ant-design/icons'

const leftLayout = {
  md: { span: 6, offset: 2 },
  xs: { span: 24 }
}

const rightLayout = {
  md: { span:12, offset: 1 },
  xs: { span:22, offset: 1 }
}

const { Title } = Typography

const Employment = ({
  employment
}) => (
  <div class="employment">
    <Space align='top'>
      <Title level={4}>{employment.company}</Title>
      <Button shape="circle" icon={<EditOutlined />} />
    </Space>
    <div className="info">{employment.title}<span>&bull;</span> <em className="date">{employment.date}</em></div>
    <div>{employment.description}</div>
  </div>
)

export default ({
  employments
}) => (
  <div className='employment'>
    <Row>
      <Col {...leftLayout} align='center'>
        <Title level={3}>Employment history</Title>
      </Col>
      <Col {...rightLayout}>
        {(employments || []).map((employment) => (<Employment employment={employment}/>))}
      </Col>
    </Row>
  </div>
)