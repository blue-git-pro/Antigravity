import React from 'react'
import { Tabs } from 'antd'

const TabPane=Tabs.TabPane;
const VChooser = ({steps}) => {
  return(
    <>
    <Tabs defaultActiveKey='0' className='vertical-chooser' tabPosition='left'>
      {steps.map(({ imageURL, topic}, idx) => (
        <TabPane tab={topic} key={idx}>
          <img src={imageURL} className='chooser-img'></img>
        </TabPane>
      ))}
    </Tabs>
    </>
  )
}
export default VChooser