import get from 'lodash/get'
import head from 'lodash/head'
import set from 'lodash/set'
import Immutable from 'seamless-immutable'
import isArray from 'lodash/isArray'

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1)

export const createReducer = (initialState, handlers) => (
  state = Immutable(initialState),
  action,
) => (handlers[action.type] ? handlers[action.type](state, action) : state)

export const createAsyncAction = type => ({
  REQUEST: `${type}.REQUEST`,
  SUCCESS: `${type}.SUCCESS`,
  FAILURE: `${type}.FAILURE`,
})

export const createFields = (type, field, singular = false) => {
  const entity = field || type
  var addKey = !field || field === type ? '' : capitalizeFirstLetter(field)
  return {
    [entity]: singular ? null : [],
    ['isLoading'.concat(addKey)]: false,
    ['isLoaded'.concat(addKey)]: false
  }
}

export const createReducerHandlers = (type, actionTypes, handlerOptions = {}) => {
  const field = handlerOptions['mapToKey']
  const singular = handlerOptions['singular']
  const addKey = !field || field === type ? '' : capitalizeFirstLetter(field)
  return {
    [actionTypes.REQUEST]: state => state.merge({
      ['isLoading'.concat(addKey)]: true,
      ['isLoaded'.concat(addKey)]: false,
    }),
    [actionTypes.FAILURE]: state => state.merge({
      ['isLoading'.concat(addKey)]: false,
      ['isLoaded'.concat(addKey)]: false
    }),
    [actionTypes.SUCCESS]: (state, action) => {
      let nextState = {
        ['isLoaded'.concat(addKey)]: true,
        ['isLoading'.concat(addKey)]: false
      }

      const payloadResource = get(action, 'payload.data.'.concat(type))
      const mappedResourceType = field || type

      if (singular) {
        set(nextState, mappedResourceType, isArray(payloadResource) ? head(payloadResource) : payloadResource)
      } else {
        set(nextState, mappedResourceType, payloadResource)
      }
      return state.merge(nextState)
    }
  }
}