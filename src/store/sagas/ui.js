import get from "lodash/get"
import pick from "lodash/pick"
import { all, cancel, fork, put, select, takeEvery, throttle } from "redux-saga/effects"

import { loadUsers } from "store/actions/accounts"
import { loadEducations } from "store/actions/developer/educations"
import { loadHistories } from "store/actions/developer/histories"
import { loadPortfolios } from "store/actions/developer/portfolios"
import { CHANGE_PAGE, CHANGE_PAGE_SIZE, CHANGE_SORTED, UPDATE_FILTER_FORM } from "store/actions/ui"

import { getState as getUiState } from 'store/selectors/ui'

function* updateList({ type, payload }) {
  const action = get(
    {
      developers: loadUsers,
      portfolios: loadPortfolios,
      histories: loadHistories,
      // educations: loadEducations,
      // certifications: loadCertifications,
    },
    payload.type
  )

  if (!action) yield cancel()

  const uiState = yield select(getUiState)

  const filters = get(uiState, `${payload.type}FilterForm`, {})

  yield put(action({
    filters,
    ...(type !== UPDATE_FILTER_FORM 
      ? 
      { 
        page: pick(get(uiState, `${payload.type}Paged`), [
          'number',
          'size'
        ])
      }
      : {})
  }))
}

function* filterFormUpdating() {
  yield throttle(2000, UPDATE_FILTER_FORM, updateList)
}

export default function* ui() {
  yield all([
    fork(filterFormUpdating),
    takeEvery([CHANGE_PAGE, CHANGE_PAGE_SIZE, CHANGE_SORTED], updateList),
  ])
}