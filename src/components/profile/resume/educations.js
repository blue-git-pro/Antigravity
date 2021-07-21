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

const Education = ({
  education
}) => (
  <div class="education">
    <Space align='top'>
      <Title level={4}>{education.school}</Title>
      <Button shape="circle" icon={<EditOutlined />} />
    </Space>
    <div className="date">{education.date}</div>
    <div>{education.degree}</div>
  </div>
)

export default ({
  educations
}) => (
  <div className='education'>
    <Row>
      <Col {...leftLayout} align='center'>
        <Title level={3}>Education</Title>
      </Col>
      <Col {...rightLayout}>
        {educations.map((education) => (<Education education={education}/>))}
      </Col>
    </Row>
  </div>
)