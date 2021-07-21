import React from 'react'
import { Row } from 'antd'

import { FixedWidthLayout } from 'containers/layout'
import CustomFeatureItem from './custom-feature-item'

const items = [
  {
    title: 'Web',
    content: 'As a web application development hub, we are committed to bringing tangible business results with fully packed, high-performing, and secure web solutions.'
  }, {
    title: 'Mobile',
    content: 'It’s time to catch up with today’s mobile-always world. Whether you go native, hybrid or cross-platform, we hold our mobile software application development to the latest standards.'
  }, {
    title: 'Cloud',
    content: 'If you’re considering migrating or building mission-critical apps for cloud environments, count us in. You’ll get total control over your infrastructure. We’ll just act as your sidekick. That’s a win!'
  }, 
]

const Custom = () => {
  return (
    <FixedWidthLayout>
      <h2 className="section-title">
        <b>Custom Software development</b><br/> 
        for <span className="red">your company</span>
      </h2>
      <p>Powered by over 15-years worth of experience, we build tech and business savvy engineering teams that grow with you, from the early stages to wherever your aspirations take you.</p>
      <Row type="flex">
        {items.map((item, idx) => (
          <CustomFeatureItem {...item} key={'custom-feature-item-' + idx}/>
        ))}
      </Row>
    </FixedWidthLayout>
  )
}

export default Custom