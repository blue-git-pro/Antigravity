import { LOAD_CERTIFICATES, CREATE_CERTIFICATE, UPDATE_CERTIFICATE } from "store/actions/developer/certificates"
import { createFields, createReducerHandlers, createReducer } from "utils/store"

const initialState = {
  ...createFields('certificates'),
  defaultSize: 10
}

const handlers = {
  ...createReducerHandlers('certificates', LOAD_CERTIFICATES),
}

export default createReducer(initialState, handlers)