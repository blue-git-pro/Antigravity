import { LOAD_EDUCATIONS, CREATE_EDUCATION, UPDATE_EDUCATION } from "store/actions/developer/educations"
import { createFields, createReducerHandlers, createReducer } from "utils/store"

const initialState = {
  ...createFields('educations'),
  defaultSize: 10
}

const handlers = {
  ...createReducerHandlers('educations', LOAD_EDUCATIONS),
}

export default createReducer(initialState, handlers)