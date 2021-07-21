import { createSelector } from 'reselect'

import get from 'lodash/get'

export const getState = state => state.persist

export const getAccess = createSelector(
  getState,
  state => state.access
)

export const getAccessToken = createSelector(
  getAccess,
  access => get(access, 'access_token')
)

export const getHasToken = createSelector(
  getAccessToken,
  token => !!token
)

export const getAccessTokenType = createSelector(
  getAccess,
  access => get(access, 'token_type')
)

export const getAccessTokenExpiresAt = createSelector(
  getAccess,
  access => get(access, 'expires_at')
)

export const getAuthorizationHeader = createSelector(
  getAccessToken,
  getAccessTokenType,
  (token, tokenType) => token ? `${tokenType} ${token}` : null
)