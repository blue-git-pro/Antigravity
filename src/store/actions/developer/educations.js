import merge from "lodash/merge";

import { createAsyncAction } from "utils/store";
import { ENDPOINT } from 'constants/app'
import apiCall from 'services/api'

export const LOAD_EDUCATIONS = createAsyncAction('developer/educations/LOAD')
export const CREATE_EDUCATION = createAsyncAction('developer/educations/CREATE')
export const UPDATE_EDUCATION = createAsyncAction('developer/educations/UPDATE')

export const loadEducations = (params, id = null) => (dispatch, getState) => {
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
    endpoint: ENDPOINT.LOAD_EDUCATIONS,
    types: LOAD_EDUCATIONS,
    query
  })(dispatch, getState)
}

export const updateEducation = (data, id) => {
  let query = { data, id }
  id && merge(query, { id })

  return apiCall({
    method: 'PUT',
    endpoint: ENDPOINT.UPDATE_EDUCATION,
    types: UPDATE_EDUCATION,
    query
  })
}

export const createEducation = (data, id) => {
  let query = { data }
  id && merge(query, { id })
  
  return apiCall({
    method: 'POST',
    endpoint: ENDPOINT.CREATE_EDUCATION,
    type: CREATE_EDUCATION,
    query
  })
}