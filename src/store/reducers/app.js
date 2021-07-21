import { createReducer } from 'utils/store'

import { APP_READY } from 'store/actions/app'
import { AUTHENTICATE } from 'store/actions/auth'

const initialState = {
  ready: false,
}

const setAppReady = state =>
  state.merge({
    ready: true,
  })

const succeedAuthentication = state =>
  state.merge({
    ready: false,
  })

const handlers = {
  [APP_READY]: setAppReady,
  [AUTHENTICATE.SUCCESS]: succeedAuthentication,
}

export default createReducer(initialState, handlers)
