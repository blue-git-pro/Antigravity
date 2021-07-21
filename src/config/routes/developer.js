import { DEVELOPER_PATHS } from 'constants/paths'
import { NotFoundRedirector } from 'components/redirector'
import { Messages, MyJobs, Reports } from 'containers/pages/developer'

const routes = () => [
  {
    path: DEVELOPER_PATHS.MY_JOBS,
    exact: true,
    component: MyJobs,
  },
  {
    path: DEVELOPER_PATHS.REPORTS,
    exact: true,
    component: Reports,
  },
  {
    path: DEVELOPER_PATHS.MESSAGES,
    exact: true,
    component: Messages,
  },
  { component: NotFoundRedirector }
]

export default routes