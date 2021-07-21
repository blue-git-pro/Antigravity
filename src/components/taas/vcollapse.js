import React from 'react'
import { Tabs } from 'antd'
import {Collapse} from 'antd'

const TabPane=Tabs.TabPane;
const VCollapse = ({steps}) => {
  return(
    <>
    <Collapse accordion={true} bordered={false} defaultActiveKey={1} className="vertical-collapse">
        {steps.map(({imageURL,topic }, idx) => (
          <Collapse.Panel header={topic} showArrow={false} key={idx+1} className="no-border">
            <div className="album">
              <img src={imageURL}></img>
            </div>
          </Collapse.Panel>
        ))}
    </Collapse>
    </>
  )
}
export default VCollapse