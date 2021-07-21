import { CLIENT_PATHS } from 'constants/paths'
import { NotFoundRedirector } from 'components/redirector'
import { Messages, MyJobs, Reports } from 'containers/pages/client'

const routes = () => [
  {
    path: CLIENT_PATHS.MY_JOBS,
    exact: true,
    component: MyJobs,
  },
  {
    path: CLIENT_PATHS.REPORTS,
    exact: true,
    component: Reports,
  },
  {
    path: CLIENT_PATHS.MESSAGES,
    exact: true,
    component: Messages,
  },
  { component: NotFoundRedirector }
]

export default routes