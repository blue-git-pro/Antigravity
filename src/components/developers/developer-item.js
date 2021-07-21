import React from 'react'
import { List, Avatar, Row, Col } from 'antd'
import { avatarURL } from 'utils/url'
import pick from 'lodash/pick'
import merge from 'lodash/merge'
import get from 'lodash/get'
import { decorateSkills } from 'utils/string'

export default ({ 
  item,
  onClickItem 
}) => {
  const {
    id,
    name,
    avatar,
    total_earning,
  } = item

  return (
    <List.Item 
      className='list-item-developer'
      onClick={() => onClickItem(id)}
    >
    </List.Item>
  )
}