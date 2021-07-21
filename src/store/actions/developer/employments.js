import merge from "lodash/merge";

import { createAsyncAction } from "utils/store";
import { ENDPOINT } from 'constants/app'
import apiCall from 'services/api'

export const LOAD_EMPLOYMENTS = createAsyncAction('developer/employments/LOAD')
export const CREATE_EMPLOYMENT = createAsyncAction('developer/employments/CREATE')
export const UPDATE_EMPLOYMENT = createAsyncAction('developer/employments/UPDATE')

export const loadEmployments = (params, id = null) => (dispatch, getState) => {
  const defaultParams = {
    page: {
      number: 1,
      size: 10,
    },
    sort: {},
    filters: {},
  }
  
  const query = merge({}, defaultParams, params)
  id && merge(query, { id })

  return apiCall({
    method: 'POST',
    endpoint: ENDPOINT.LOAD_EMPLOYMENTS,
    types: LOAD_EMPLOYMENTS,
    query
  })(dispatch, getState)
}

export const updateEmployment = (data, id) => {
  let query = { data, id }
  id && merge(query, { id })

  return apiCall({
    method: 'PUT',
    endpoint: ENDPOINT.UPDATE_EMPLOYMENT,
    types: UPDATE_EMPLOYMENT,
    query
  })
}

export const createEmployment = (data, id) => {
  let query = { data }
  id && merge(query, { id })
  
  return apiCall({
    method: 'POST',
    endpoint: ENDPOINT.CREATE_EMPLOYMENT,
    type: CREATE_EMPLOYMENT,
    query
  })
}