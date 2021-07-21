import { LOCATION_CHANGE } from 'connected-react-router'

import { AUTHENTICATE, AUTO_AUTHENTICATE, RESET_PASSWORD } from 'store/actions/auth'
import { LOG_OUT } from 'store/actions/accounts'
import { createReducer } from 'utils/store'

const initialState = {
  isLoading: false,
  isLoaded: false,
  error: null,
}

const handleErrorMessage = (type, error) => {
  switch(error.status) {
    case 401:
      return "Wrong email/password"
    case 422:
      return "Please confirm email address"
    default:
      return null
  }
}

const handleRequest = state => state.merge({ error: null, isLoading: true, isLoaded: false })

const handleSuccess = state => state.merge({ isLoading: false, isLoaded: true, error: null })

const handleFailure = (state, { type, error }) => state.merge({ isLoading: false, isLoaded: false, error: handleErrorMessage(type, error) })

const handlers = {
  [AUTHENTICATE.REQUEST]: handleRequest,
  [AUTHENTICATE.SUCCESS]: handleSuccess,
  [AUTHENTICATE.FAILURE]: handleFailure,
  [AUTO_AUTHENTICATE.REQUEST]: handleRequest,
  [AUTO_AUTHENTICATE.SUCCESS]: handleSuccess,
  [AUTO_AUTHENTICATE.FAILURE]: handleFailure,
  
  [RESET_PASSWORD.REQUEST]: handleRequest,
  [RESET_PASSWORD.SUCCESS]: handleSuccess,
  [RESET_PASSWORD.FAILURE]: handleFailure,

  [LOG_OUT]: state => state.merge(initialState),

  [LOCATION_CHANGE]: state => state.merge({ error: null })
}

export default createReducer(initialState, handlers)