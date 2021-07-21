import { List, Skeleton } from 'antd'

export default () => (
  <List.Item className='list-item-developer'>
    <Skeleton active avatar />
  </List.Item>
)