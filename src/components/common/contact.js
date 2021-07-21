import React from 'react'
import { Row, Col } from 'antd'

import ContactCustomizedFile from './contact-customized-file'
import { FixedWidthLayout } from 'containers/layout'

const Contact = () => {
  return (
    <FixedWidthLayout className='contact-form'>
      <h2 className="head-text">Contact us</h2>
      <form>
        <Row>
          <Col md={12} xs={24} className="form-part">
            <div className="require">
              <input id="name" name="name" placeholder="First name" type="text"/>
              <label htmlFor="name">*</label>
            </div>
            <div className="require">
              <input id="surname" name="surname" placeholder="Last name" type="text"/>
              <label htmlFor="surname">*</label>
            </div>
            <div className="require">
              <input autoComplete="off" id="email" name="email" placeholder="Email address" type="text"/>
              <label htmlFor="email">*</label>
            </div>
            <input id="phone" name="phone" placeholder="Phone" type="text"/>
            {/* <input type="file" placeholder="Upload file (max size is 30MB)"/> */}
            <ContactCustomizedFile />
          </Col>
          <Col md={12} xs={24} className="form-part">
            <div className="require">
              <input autoComplete="off" id="budget" name="budget" placeholder="Pre-estimated budget" type="text"/>
              <label htmlFor="budget">*</label>
            </div>
            <textarea rows="3" placeholder="Type your message">
            </textarea>
            <div className="d-flex justify-content-center">
              <button className="send-button">Send</button>
            </div>
          </Col>
        </Row>
      </form>
    </FixedWidthLayout>
  )
}

export default Contact