import { Developer, Client, Admin, Root, Auth, Public } from 'containers/layout'
import { NotFound } from 'containers/pages/public'
import { ADMIN_ROOT, AUTH_ROOT, CLIENT_ROOT, DEVELOPER_ROOT, PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'
import { USER_ROLES } from 'constants/roles'
import publicRoutes from './public'
import authRoutes from './auth'
import adminRoutes from './admin'
import developerRoutes from './developer'
import clientRoutes from './client'


const routesForRole = viewer => ({
  [USER_ROLES.admin]: [
    {
      path: ADMIN_ROOT,
      component: Admin,
      routes: adminRoutes(viewer),
    },
  ],
  [USER_ROLES.developer]: [
    {
      path: DEVELOPER_ROOT,
      component: Developer,
      routes: developerRoutes(viewer)
    }
  ],
  [USER_ROLES.client]: [
    {
      path: CLIENT_ROOT,
      component: Client,
      routes: clientRoutes(viewer)
    }
  ]
}[viewer.role])

const routes = viewer => {
  let viewerRouters = []

  if (viewer.isReady) {
    viewerRouters = routesForRole(viewer) || []
  }

  const allRoutes = [
    ...viewerRouters,
    {
      path: AUTH_ROOT,
      component: Auth,
      routes: authRoutes(viewer)
    },
    {
      path: PUBLIC_PATHS.NOT_FOUND,
      component: NotFound
    },
    {
      path: ROOT_PATH,
      component: Public,
      routes: publicRoutes()
    }
  ]

  return [
    {
      component: Root,
      routes: allRoutes
    }
  ]
}

export default routes