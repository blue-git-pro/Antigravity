import React from 'react'


const PerkItem = ({title,content}) => {
  return(
    <div className='item'>
      <span>{title}</span>
      <span>{content}</span>
    </div>
  )
}
export default PerkItem