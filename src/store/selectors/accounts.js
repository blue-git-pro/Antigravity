import get from 'lodash/get'
import { createSelector } from 'reselect'

export const getState = state => state.accounts

export const getVisitor = createSelector(
  getState,
  state => state.me
)

export const getVisitorId = createSelector(
  getVisitor,
  visitor => get(visitor, 'id')
)

export const getVisitorRole = createSelector(
  getVisitor,
  visitor => get(visitor, 'role')
)

export const getVisitorName = createSelector(
  getVisitor,
  visitor => get(visitor, 'name')
)

export const getVisitorPhoto = createSelector(
  getVisitor,
  visitor => get(visitor, 'avatar')
)

export const getIsLoadingVisitor = createSelector(
  getState,
  state => state.isLoadingMe
)

export const getSelectedUser = createSelector(
  getState,
  state => state.selected
)

export const getSelectedUserId = createSelector(
  getSelectedUser,
  user => get(user, 'id')
)

export const getIsLoadingUsers = createSelector(
  getState,
  state => state.isLoading
)

export const getIsLoadedUsers = createSelector(
  getState,
  state => state.isLoaded
)

export const getUsers = createSelector(
  getState,
  state => get(state, 'accounts', [])
)

export const getTotal = createSelector(
  getState,
  state => state.total
)