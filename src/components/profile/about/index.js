import React from 'react'
import { Col, Row, Typography, Button, Space, Modal, Input } from 'antd'
import { EditOutlined } from '@ant-design/icons'
import merge from 'lodash/merge'
import pick from 'lodash/pick'
import { avatarURL } from 'utils/url'

const leftLayout = {
  md: { span: 6, offset: 2 },
  xs: { span: 24 }
}

const rightLayout = {
  md: { span:12, offset: 1 },
  xs: { span:22, offset: 1 }
}

const { Title } = Typography
const { TextArea } = Input

const ReachableContext = React.createContext();

const modalEditTitle = {
  title: 'Your Title',
  icon: null,
  content: (
    <ReachableContext.Consumer>{value => <Input defaultValue={value} />}</ReachableContext.Consumer>
  ),
};

const modalEditOverview = {
  title: 'Overview',
  icon: null,
  content: (
    <ReachableContext.Consumer>{value => <TextArea defaultValue="" autoSize={true}/>}</ReachableContext.Consumer>
  ),
};

export default ({
  user,
  profile
}) => {
  const [modal, contextHolder] = Modal.useModal();
  
  const { hourly_rate, skills, overview, title } = merge({}, {
    'hourly_rate': 25,
    'skills': '',
    'overview': '',
    'title': ''
  },
  pick(profile, [
    'hourly_rate',
    'skills',
    'overview',
    'title'
  ]))

  const { avatar, name } = pick(user, [
    'avatar',
    'name'
  ])

  return (
    <ReachableContext.Provider value={title}>
      <section id="about">
        <Row>
          <Col {...leftLayout} align='center'>
            <img className="avatar-layout" src={avatarURL(avatar)} />
            <Title level={4} className="name">{name}</Title>
          </Col>
          <Col {...rightLayout}>
            <Space align='top'>
              <Title level={3}>{title}</Title>
              <Button shape="circle" icon={<EditOutlined />} onClick={() => {
                modal.confirm(modalEditTitle);
              }} />
            </Space>

            <Space align='top'>
              <div>{overview}</div>
              <Button shape="circle" icon={<EditOutlined />} onClick={() => {
                modal.confirm(modalEditOverview);
              }} />
            </Space>
          </Col>
        </Row>
      </section>

      {contextHolder}
    </ReachableContext.Provider>
  )
}