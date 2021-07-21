import merge from "lodash/merge";

import { createAsyncAction } from "utils/store";
import { ENDPOINT } from 'constants/app'
import apiCall from 'services/api'

export const LOAD_PORTFOLIOS = createAsyncAction('developer/portfolios/LOAD')
export const CREATE_PORTFOLIO = createAsyncAction('developer/portfolios/CREATE')
export const UPDATE_PORTFOLIO = createAsyncAction('developer/portfolios/UPDATE')

export const loadPortfolios = ({
  number = 1,
  size = 10,
  sort,
  filters,
} = {}, ownerId = null) => (dispatch, getState) => {
  let params = {
    page: {
      number,
      size,
    },
    sort,
    filter: filters
  }

  ownerId && merge(params, { ownerId })

  return apiCall({
    method: 'POST',
    endpoint: ENDPOINT.LOAD_PORTFOLIOS,
    types: LOAD_PORTFOLIOS,
    query: params
  })(dispatch, getState)
}

export const updatePortfolio = (data, id, ownerId = null) => {
  let query = { data, id }
  ownerId && merge(query, { ownerId })

  return apiCall({
    method: 'PUT',
    endpoint: ENDPOINT.UPDATE_PORTFOLIO,
    types: UPDATE_PORTFOLIO,
    query
  })
}

export const createPortfolio = (data, ownerId = null) => {
  let query = { data }
  ownerId && merge(query, { ownerId })
  
  return apiCall({
    method: 'POST',
    endpoint: ENDPOINT.CREATE_PORTFOLIO,
    type: CREATE_PORTFOLIO,
    query
  })
}