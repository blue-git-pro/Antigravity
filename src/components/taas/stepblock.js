import React from 'react'
import StepChooser from './stepchooser'


const StepBlock = () => {
  return(
    <div className='step-block'>
      <div className='container'>
        <p/>
        <h2>Welcome to <span>a remote talent hub</span></h2>
        <span>We are serious about your success from the get-go. iTechArt ensures your in-house team and our dedicated developers enter synergy mode and bring the heat to your target market.</span>
        <StepChooser/>
      </div>
    </div>
  )
}
export default StepBlock