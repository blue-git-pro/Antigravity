import merge from "lodash/merge";

import { createAsyncAction } from "utils/store";
import { ENDPOINT } from 'constants/app'
import apiCall from 'services/api'

export const LOAD_PROFILE         = createAsyncAction('developer/profiles/LOAD_ONE')
export const CREATE_PROFILE       = createAsyncAction('developer/profiles/CREATE')
export const UPDATE_PROFILE       = createAsyncAction('developer/profiles/UPDATE')

export const loadProfile = (id = null) => apiCall({
  method: 'POST',
  endpoint: ENDPOINT.LOAD_PROFILE,
  types: LOAD_PROFILE,
  query: id ? { id } : {}
})

const updateProfile = (data, id = null) => apiCall({
  method: 'PUT',
  endpoint: ENDPOINT.UPDATE_PROFILE,
  types: UPDATE_PROFILE,
  query: id ? merge({}, data, { id }) : data
})

export const updateHourlyRate = (value, id = null) => updateProfile({ hourly_rate: value }, id)

export const updateOverview = (value, id = null) => updateProfile({ overview: value }, id)

export const updateSkills = (value, id = null) => updateProfile({ skills: value }, id)

export const updateTitle = (value, id = null) => updateProfile({ title: value }, id)

export const createProfile = (data, id) => apiCall({
  method: 'POST',
  endpoint: ENDPOINT.CREATE_PROFILE,
  types: CREATE_PROFILE,
  query: { data, id }
})