import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Layout, Menu } from 'antd'
import { NavBar } from 'components/common'

import { PUBLIC_PATHS } from 'constants/paths'

const Auth = ({ route }) => (
  <Layout>
  </Layout>
)

Auth.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Auth