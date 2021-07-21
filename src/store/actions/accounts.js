import { createAsyncAction } from "utils/store";
import { ENDPOINT } from 'constants/app'
import apiCall from 'services/api'
import { getState } from "store/selectors/auth";
import { USER_ROLES } from "constants/roles";
import merge from "lodash/merge";

export const LOAD_ACCOUNTS        = createAsyncAction('accounts/LOAD')
export const LOAD_ACCOUNT         = createAsyncAction('accounts/LOAD_ONE')
export const LOAD_MY_ACCOUNT      = createAsyncAction('accounts/LOAD/ME')

export const LOG_OUT              = 'visitor/LOG_OUT'

export const loadUsers = (params, role = USER_ROLES.developer) => (dispatch, getState) => {
  const defaultParams = {
    page: {
      number: 1,
      size: 10,
    },
    sort: {},
    filters: {},
  }
  
  const {
    page: {
      number,
      size
    },
    sort,
    filters
  } = merge({}, defaultParams, params)

  return apiCall({
    method: 'POST',
    endpoint: ENDPOINT.LOAD_ACCOUNT,
    types: LOAD_ACCOUNTS,
    query: {
      page: {
        number,
        size,
      },
      sort,
      filter: filters,
      role
    }
  })(dispatch, getState)
}

export const loadUser = (id) => (dispatch, getState) => apiCall({
  method: 'POST',
  endpoint: ENDPOINT.LOAD_ACCOUNT,
  types: LOAD_ACCOUNT,
  query: { id }
})(dispatch, getState)

export const loadVisitor = () => (dispatch, getState) => apiCall({
  method: 'POST',
  endpoint: ENDPOINT.LOAD_ACCOUNT,
  types: LOAD_MY_ACCOUNT,
  query: {}
})(dispatch, getState)

export const logOut = () => ({
  type: LOG_OUT
})