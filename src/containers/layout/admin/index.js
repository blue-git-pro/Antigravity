import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Layout } from 'antd'

import { NavBar, Footer } from 'components/common'
import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'
import Sidebar from './sider'

const { Content, Sider } = Layout

const popOverContent = (
  <div>
    <p><Link to={PUBLIC_PATHS.PROFILE}>Profile</Link></p>
    <p><Link to={ROOT_PATH}>Sign out</Link></p>
  </div>
);

const Admin = ({ route }) => (
  <Layout>
    
  </Layout>
)

Admin.propTypes = {
  route: PropTypes.object.isRequired,
}

export default Admin