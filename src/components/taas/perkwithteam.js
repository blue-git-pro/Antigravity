import React from 'react'
import BlockItem from './blockitem'
import PerkItem from './perkitem'
const blocks =[
  {
    title: 'Minimum extras',
    content: 'Forget about all the mind-boggling yet important stuff like ergonomic chairs, massage, and other add-ons employees might actually not need. You have it covered from every angle.'
  },
  {
    title: 'Reliable Collab',
    content: 'We build a strong, durable environment, but our collaboration doesn’t end there. You can be sure that your team is ready to stay with you as long as you need them.'
  },
  {
    title: 'Quick ramp-up',
    content: 'With iTechArt’s staff augmentation services, you can easily scale your dedicated team up as your business grows. It’s like you are managing your in-house team, only more flexible.'
  },
]
const PerkWithTeam = () => {
  return (
    <div className='perk-with-team'>
    <div className='container'>
      <h2>Perks that <span>go with your team</span></h2>
      <span>We adhere to the zero time waste logic when it comes to your product development. We carefully follow a roadmap to deliver on time and in line with investors’ and stakeholders’ expectations. Other goodies include:</span>
      <div className='list-flexbox'>
        {blocks.map((item,idx)=>(
          <PerkItem {...item}/>
        ))}
      </div>
    </div>
    </div>
  )
}

export default PerkWithTeam