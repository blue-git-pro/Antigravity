import { Redirect } from 'react-router-dom'

import { PUBLIC_PATHS, ROOT_PATH } from 'constants/paths'

export const AuthorizedRedirector = () => <Redirect to={ROOT_PATH} />

export const NotFoundRedirector = () => <Redirect to={PUBLIC_PATHS.NOT_FOUND} />