import { ADMIN_PATHS } from 'constants/paths'
import { Clients, Developers, Client, Developer } from 'containers/pages/admin'

const routes = () => [
  {
    path: ADMIN_PATHS.CLIENTS,
    exact: true,
    component: Clients
  },
  {
    path: ADMIN_PATHS.DEVELOPERS,
    exact: true,
    component: Developers
  },
  {
    path: ADMIN_PATHS.CLIENT,
    exact: true,
    component: Client
  },
  {
    path: ADMIN_PATHS.DEVELOPER,
    exact: true,
    component: Developer
  },
]

export default routes