import { LOCATION_CHANGE } from 'connected-react-router'

import { createReducer } from 'utils/store'
import {
  UPDATE_FILTER_FORM,
  CHANGE_PAGE,
  CHANGE_PAGE_SIZE,
  CHANGE_SORTED,
} from 'store/actions/ui'

const initialState = {
  developersFilterForm: {
  },
  developersPaged: {
    number: 1,
    size: 10
  }
}

const handlers = {
  [UPDATE_FILTER_FORM]: (state, { payload: { type, data } }) => state.merge({ [`${type}FilterForm`]: data }),

  [CHANGE_PAGE]: (state, { payload: { type, page } }) => state.setIn([`${type}Paged`, 'number'], page),
  [CHANGE_PAGE_SIZE]: (state, { payload: { type, size } }) => state.setIn([`${type}Paged`, 'size'], size),
  
  [CHANGE_SORTED]: (state, { payload: { type, sorted } }) => state.setIn([`${type}Sorted`, 'sorted'], sorted),

  [LOCATION_CHANGE]: state => state.merge(initialState),
}

export default createReducer(initialState, handlers)