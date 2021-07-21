import { Spin } from 'antd'

const Loading = () => (
  <div className="loading-container">
    <Spin size='large' tip='Loading...'/>
  </div>
)

export default Loading