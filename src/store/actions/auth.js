import { createAsyncAction } from 'utils/store'
import apiCall from 'services/api'
import { ENDPOINT } from 'constants/app'
import { getHasToken } from 'store/selectors/persist'

export const AUTHENTICATE = createAsyncAction('auth/AUTHENTICATE')
export const AUTO_AUTHENTICATE = createAsyncAction('auth/AUTHENTICATE/AUTO')
export const CONFIRM_EMAIL = createAsyncAction('auth/CONFIRM_EMAIL')
export const RESET_PASSWORD = createAsyncAction('auth/RESET_PASSWORD')
export const CHANGE_PASSWORD = createAsyncAction('auth/CHANGE_PASSWORD')

export const signIn = (email, password) =>
  apiCall({
    method: 'POST',
    endpoint: ENDPOINT.SIGN_IN,
    query: {
      email,
      password,
    },
    types: AUTHENTICATE
  })

export const signUp = ({
  email,
  password,
  role,
  location
}) => apiCall({
  method: 'POST',
  endpoint: ENDPOINT.SIGN_UP,
  query: {
    email,
    password,
    role,
    location
  },
  types: AUTHENTICATE
})

export const signInByToken = () => (dispatch, getState) => {
  const hasToken = getHasToken(getState())
  if (hasToken) {
    return dispatch(apiCall({
      method: 'POST',
      endpoint: ENDPOINT.SIGN_IN_BY_TOKEN,
      query: {},
      types: AUTO_AUTHENTICATE
    }))
  }
  return dispatch({
    type: AUTHENTICATE.FAILURE,
    error: {
      message: 'NO EXISTS TOKEN'
    }
  })
}