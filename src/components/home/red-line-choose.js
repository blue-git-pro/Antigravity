import React from 'react'
import { Tabs } from 'antd'
import Icon from 'antd/lib/icon'

const RedLineChoose = ({ panes }) => {
  return (
    <Tabs className="my-chooser mt-20">
      {panes.map(({ imageURL, title, content }, idx) => (
        <Tabs.TabPane tab={(<img src={imageURL} className="chooser-img"/>)} key={1} className="my-chooser-item" key={idx}>
          <span className="head">{title}</span>
          <div className="d-flex justify-content-center">
            <span className="text justify-text">{content}</span>
          </div>
        </Tabs.TabPane>
      ))}
    </Tabs>
  )
}

export default RedLineChoose