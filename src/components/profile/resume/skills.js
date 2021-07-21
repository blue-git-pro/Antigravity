import React, { useMemo, useState } from 'react'
import { Col, Row, Tag, Button, Space, Typography } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import get from 'lodash/get'
import { strToArray } from 'utils/string'

const leftLayout = {
  md: { span: 6, offset: 2 },
  xs: { span: 24 }
}

const rightLayout = {
  md: { span:12, offset: 1 },
  xs: { span:22, offset: 1 }
}

const { Title } = Typography

export default ({
  profile
}) => {
  const [skills, setSkills] = useState([])
  const _skills = get(profile, 'skills', '')

  useMemo(() => {
    _skills.length > 0 && setSkills(strToArray(_skills))
  }, [_skills])

  return (
    <Row>
      <Col {...leftLayout} align='center'>
        <Title level={3}>Skills</Title>
      </Col>
      <Col {...rightLayout}>
        <Space align='top'>
          <Row>
            {skills.map((skill) => (
              <Tag className="skill_item" color="#aaa">{skill}</Tag>
            ))}
          </Row>
          <Button shape="circle" icon={<EditOutlined />} />
        </Space>
      </Col>
    </Row>
  )
}