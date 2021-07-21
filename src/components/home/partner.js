import React from 'react'
import { Row, Col, Carousel } from 'antd'

import { FixedWidthLayout } from 'containers/layout'

const data = [
  {
    figure: '1700+',
    content: 'Engineers in total'
  }, {
    figure: '15+',
    content: 'Years expertise'
  }, {
    figure: '14',
    content: 'Global locations'
  }, 
]

const Partner = () => {
  return (
    <FixedWidthLayout>
      <h2 className="section-title"><span>A partner every step</span><br/> of the way</h2>
      <Row>
        <Col sm={16} xs={24}>
          <p className="partner-description">
            We partner with fast-growing tech companies and VC-backed startups coming from the top accelerators like Techstars, 500 startups, ERA, Dreamit and Y Combinator.
          </p>
        </Col>
        <Col sm={8} xs={24}>
          <Carousel className="partner-carousel" dots={false} autoplay={true}>
            {data.map(({ figure, content }, idx) => (
              <div key={"partner-carousel-item-" + idx}>
                <div className="figure center-text">{figure}</div>
                <p className="content center-text">{content}</p>
              </div>
            ))}
          </Carousel>
        </Col>
      </Row>
    </FixedWidthLayout>
  )
}

export default Partner