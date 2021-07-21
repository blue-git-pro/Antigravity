import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'
import { 
  Home,
  Projects, Token, Partners, News 
} from 'containers/pages/public'
import { NotFoundRedirector } from 'components/redirector'

const routes = () => [
  {
    path: ROOT_PATH,
    exact: true,
    component: Home
  },
  {
    path: PUBLIC_PATHS.PROJECTS,
    exact: true,
    component: Projects
  },
  {
    path: PUBLIC_PATHS.TOKEN,
    exact: true,
    component: Token
  },
  {
    path: PUBLIC_PATHS.PARTNERS,
    exact: true,
    component: Partners
  },
  {
    path: PUBLIC_PATHS.NEWS,
    exact: true,
    component: News
  },
  
  { component: NotFoundRedirector }
]

export default routes