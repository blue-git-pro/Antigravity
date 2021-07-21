import { LOAD_PROFILE } from "store/actions/developer/profiles"
import { createFields, createReducerHandlers, createReducer } from "utils/store"

const initialState = {
  ...createFields('profiles', 'selected', true),
}

const handlers = {
  ...createReducerHandlers('profiles', LOAD_PROFILE, {
    mapToKey: 'selected',
    singular: true
  }),
}

export default createReducer(initialState, handlers)