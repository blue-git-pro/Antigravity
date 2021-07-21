const { LOAD_HISTORIES, CREATE_HISTORY, UPDATE_HISTORY } = require("store/actions/developer/histories")
const { createFields, createReducerHandlers, createReducer } = require("utils/store")

const initialState = {
  ...createFields('histories'),
  defaultSize: 10
}

const handlers = {
  ...createReducerHandlers('histories', LOAD_HISTORIES),
}

export default createReducer(initialState, handlers)