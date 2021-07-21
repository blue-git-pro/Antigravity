import React from 'react'
import { Layout, Collapse, Typography } from 'antd'

const { Panel } = Collapse
const { Sider } = Layout
const { Title } = Typography

export default () => (
  <Sider width={250} style={{ background: 'transparent' }}>
    <Title className='title-filter' level={4}>Filter By</Title>
    <Collapse 
      bordered={false} 
      expandIconPosition='right' 
      defaultActiveKey={['1']} 
      style={{ background: 'transparent' }}
    >
      <Panel header={<strong>Category</strong>} key="1" >
        <div>Mobile Frontend</div>
        <div>Web Frontend</div>
        <div>Backend</div>
      </Panel>
      <Panel header={<strong>Hourly Rate</strong>} key="2" >
        <div>Below $30/hr</div>
        <div>$30/hr - $50/hr</div>
        <div>$50/hr - $70/hr</div>
        <div>$70/hr - $100/hr</div>
        <div>Above $100/hr</div>
      </Panel>
      <Panel header={<strong>Job Success</strong>} key="3" >
        <div>Above 80%</div>
        <div>Above 90%</div>
      </Panel>
    </Collapse>
  </Sider>
)