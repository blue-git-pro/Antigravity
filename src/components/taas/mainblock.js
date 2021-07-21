import React from 'react'
import BlockItem from './blockitem'
import {Col, Row} from 'antd'
const blocks =[
  {
    title: 'Top',
    semiTitle: 'tier talent',
    content: 'iTechArt ramped up our in-house team with 1700 engineers under one roof to ensure the development process is seamless and transparent.'
  },
  {
    title: 'Engineering',
    semiTitle: 'powerhouse',
    content: 'You get unlimited access to all the skills you might need, including web, mobile, QA and testing, big data and DevOps.'
  },
  {
    title: 'Great',
    semiTitle: 'teamwork',
    content: 'We at iTechArt consider ourselves as one big team, not just a number of units — so when we join your project, they’ll be on the same page about the upcoming gig from day one.'
  },
  {
    title: 'Startup',
    semiTitle: 'mentality',
    content: 'Our people are thrilled to tackle hot technologies and challenging tasks. Sounds exactly like your project, huh?'
  },
]
const MainBlock = () => {
  return (
    <div className='main-block container'>
      <h2>A perfect mash-up <span>of code and soft skills</span></h2>
      <Row className='content'>
        {blocks.map((item,idx)=>(
          <BlockItem {...item} key={idx}/>
        ))}
      </Row>
    </div>
  )
}

export default MainBlock