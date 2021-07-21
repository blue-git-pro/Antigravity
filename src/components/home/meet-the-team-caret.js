import React, { useState, useEffect } from 'react'

const MeetTheTeamCaret = ({ strings }) => {
  const [currentString, setCurrentString] =  useState('')
  const [curId, setCurId] = useState(0)
  const [timercnt, setTimercnt] = useState(0)
  let timerHandler = 0
  const timerDelay = 10

  useEffect(() => {
    timerHandler = setInterval(() => {
      // if(timercnt < timerDelay) {
      //   setTimercnt(timercnt + 1)
      //   return;
      // }
      if(currentString.length >= strings[curId].length) {
        // setTimercnt(0)
        setCurId((curId + 1) % 3)
        setCurrentString('')
      }
      else
        setCurrentString(currentString + strings[curId][currentString.length])
    }, 300);
    return () => {
      clearInterval(timerHandler)
    }
  })
  return (
    <span id="caret-string">
      {currentString}
    </span>
  )
}

export default MeetTheTeamCaret