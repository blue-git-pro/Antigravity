import { LOAD_EMPLOYMENTS } from "store/actions/developer/employments"
import { createFields, createReducerHandlers, createReducer } from "utils/store"

const initialState = {
  ...createFields('employments'),
  defaultSize: 10
}

const handlers = {
  ...createReducerHandlers('employments', LOAD_EMPLOYMENTS),
}

export default createReducer(initialState, handlers)