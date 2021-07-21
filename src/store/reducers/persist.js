import { createReducer } from "utils/store"

import pick from "lodash/pick"
import { AUTHENTICATE, AUTO_AUTHENTICATE } from "store/actions/auth"
import { LOG_OUT } from "store/actions/accounts"

const initialState = {
  access: null,
}

const handlers = {
  [AUTHENTICATE.SUCCESS]: (state, { payload }) => state.merge({
    access: pick(payload.data, ['access_token', 'token_type', 'expires_at']),
  }),
  [AUTO_AUTHENTICATE.SUCCESS]: (state, { payload }) => state.merge({
    access: pick(payload.data, ['access_token', 'token_type', 'expires_at']),
  }),
  [AUTHENTICATE.FAILURE]: state => state.merge(initialState),
  [AUTO_AUTHENTICATE.FAILURE]: state => state.merge(initialState),
  [LOG_OUT]: state => state.merge(initialState),
}

export default createReducer(initialState, handlers)