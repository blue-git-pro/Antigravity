import get from 'lodash/get'
import { createSelector } from 'reselect'

export const getState = state => state.developer

export const getProfile = createSelector(
  getState,
  state => get(state, 'profiles.selected')
)

export const getProfileId = createSelector(
  getProfile,
  profile => get(profile, 'id')
)

export const getPortfolios = createSelector(
  getState,
  state => get(state, 'portfolios.portfolios')
)

export const getHistories = createSelector(
  getState,
  state => {
    return get(state, 'histories.histories')
  }
)

export const getEducations = createSelector(
  getState,
  state => get(state, 'educations.educations')
)

export const getEmployments = createSelector(
  getState,
  state => get(state, "employments.employments")
)

export const getCertificates = createSelector(
  getState,
  state => get(state, 'certificates.certificates')
)