import { all, fork } from 'redux-saga/effects'
import auth from './auth'
import uploading from './uploading'
import ui from './ui'
import profile from './profile'

const rootSaga = function* root() {
  yield all([
    fork(auth), 
    fork(profile),
    fork(uploading),
    fork(ui)
  ])
}

export default rootSaga