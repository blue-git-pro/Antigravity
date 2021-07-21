import React from 'react'
import { Row } from 'antd'

import CoreValueItem from './core-value-item'
import { FixedWidthLayout } from 'containers/layout'

const data = [
  {
    title: 'Find and retain',
    title1: 'high ',
    title2: 'potential',
    content: 'We care greatly about work culture and upgrade options. Our custom software development experts evolve and stay with your company as long as you need them.',
    stat: [
      {figure: '1700+', des: 'Developers'},
      {figure: '5.6%', des: 'Low attrition rate'},
    ]
  }, {
    title: 'Always',
    title1: 'stay ',
    title2: 'in sync',
    content: 'While the average candidate search takes up to 2 months, we only need 2 weeks to assemble and onboard your team. Then we sway to your rhythm and fully embrace your workflow.',
    stat: [
      {figure: '24h', des: 'First vetted CVs'},
      {figure: '2', des: 'Weeks to kick off'},
    ]
  }, {
    title: 'Different,',
    title1: 'yet after ',
    title2: 'the same goal',
    content: 'We packed our teams with diverse strengths, interests, and engineering backgrounds to offer truly versatile software development services.',
    stat: [
      {figure: '100%', des: 'In-demand tech skills covered'},
      {figure: '30+', des: 'Industries we operate in'},
    ]
  }, {
    title: 'Focus on',
    title1: 'outcomes, ',
    title2: 'not output',
    content: 'Our engineers never cross the line from “fan” to “fanatic.” Their hearts race not because of how many lines of code they write, but the results they bring to the table.',
    stat: [
      {figure: '2.5+', des: 'Avg years clients stay with us'},
      {figure: '$2B', des: 'Our clients raised collectively'},
    ]
  }, 
]

const CoreValue = () => {
  return (
    <>
      <FixedWidthLayout>
        <h2 className="section-title">
          <b>
            Core values ____<br/>
            we live by
          </b>
        </h2>
      </FixedWidthLayout>
      <div style={{ position: 'relative' }}>
        <div className="left-half grey"></div>
        <FixedWidthLayout>
          <Row>
            {data.map((datum, idx) => (
              <CoreValueItem {...datum} key={'core-value-item-' + idx} isLeft={ idx%2 == 0 }/>
            ))}
          </Row>
        </FixedWidthLayout>
      </div>
    </>
  )
}

export default CoreValue