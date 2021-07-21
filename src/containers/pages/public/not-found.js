import { ROOT_PATH } from 'constants/paths'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div>
    <div>404 Page Not Found! Something went wrong!</div>
    <Link to={ROOT_PATH}>Back to Home Page</Link>
  </div>
)

export default NotFound