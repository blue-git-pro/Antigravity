import React from 'react'
import { Tabs } from 'antd'

const steps=[
  {
    imageURL: require('assets/images/how-we-work/step-chooser/belfast.png').default,
    topic: 'Step 1',
    content: 'We start with an immersion into your vision, challenges, and goals. This helps us maximize the efficiency of an internal vetting process.'
  },
  {
    imageURL: require('assets/images/how-we-work/step-chooser/belfast.png').default,
    topic: 'Step 2',
    content: 'We deploy X-ray vision on our roster and get back to you with the perfect candidates’ CVs in just 24 hours.'
  },
  {
    imageURL: require('assets/images/how-we-work/step-chooser/belfast.png').default,
    topic: 'Step 3',
    content: 'You interview engineers to find the perfect match. As soon as you give a thumbs-up to selected candidates, we can move on.'
  },
  {
    imageURL: require('assets/images/how-we-work/step-chooser/belfast.png').default,
    topic: 'Step 4',
    content: 'This is the “woohoo!” moment. Your much-coveted team is in full-on prep mode to start.'
  },
]
const TabPane=Tabs.TabPane;
const StepChooser = () => {
  return(
    <Tabs defaultActiveKey='0' className='step-chooser'>
      {steps.map(({ imageURL, topic, content }, idx) => (
        <TabPane tab={(<img src={imageURL} className="chooser-img"/>)} key={idx}>
          <span className="head">{topic}</span>
          <span className="text">{content}</span>
        </TabPane>
      ))}
    </Tabs>
  )
}
export default StepChooser