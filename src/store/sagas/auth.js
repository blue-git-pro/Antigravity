import { all, fork, put, take, race } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import { AUTHENTICATE, AUTO_AUTHENTICATE } from 'store/actions/auth'
import { logOut, loadVisitor, LOAD_MY_ACCOUNT, LOG_OUT } from 'store/actions/accounts'
import { appReady } from 'store/actions/app'

import { ADMIN_ROOT, CLIENT_PATHS, DEVELOPER_PATHS, ROOT_PATH } from 'constants/paths'
import { USER_ROLES } from 'constants/roles'
import isArray from 'lodash/isArray'
import head from 'lodash/head'

function* auth() {
  while (true) {
    const { manual } = yield race({
      manual: take(AUTHENTICATE.SUCCESS),
      auto: take(AUTO_AUTHENTICATE.SUCCESS)
    })

    yield put(loadVisitor())

    const { success } = yield race({
      success: take(LOAD_MY_ACCOUNT.SUCCESS),
      failure: take(LOAD_MY_ACCOUNT.FAILURE),
    })

    if (!success) {
      yield put(logOut())
    } else {
      if (manual) {
        const { payload: { data: { accounts } }} = success
        const { role } = isArray(accounts) ? head(accounts) : accounts
        
        if (role === USER_ROLES.admin) {
          yield put(push(ADMIN_ROOT))
        } else if (role === USER_ROLES.client) {
          yield put(push(CLIENT_PATHS.MY_JOBS))
        } else if (role === USER_ROLES.developer) {
          yield put(push(DEVELOPER_PATHS.MY_JOBS))
        } else {
          yield put(push(ROOT_PATH))
        }
      }

      yield put(appReady())
    }
  }
}

function* redirectLogOut() {
  while (true) {
    yield take(LOG_OUT)
    yield put(push(ROOT_PATH))
  }
}

export default function* root() {
  yield all([
    fork(auth),
    fork(redirectLogOut)
  ])
}
