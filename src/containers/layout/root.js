import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'

const Root = ({ route }) => (
  <div>{renderRoutes(route.routes)}</div>
)

Root.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Root