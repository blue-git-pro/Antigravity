export const UPDATE_FILTER_FORM = 'ui/UPDATE_FILTER_FORM'
export const CHANGE_PAGE = 'ui/CHANGE_PAGE'
export const CHANGE_PAGE_SIZE = 'ui/CHANGE_PAGE_SIZE'
export const CHANGE_SORTED = 'ui/CHANGE_SORTED'

export const changePage = (type, page) => ({
  type: CHANGE_PAGE,
  payload: { type, page }
})

export const changePageSize = (type, size) => ({
  type: CHANGE_PAGE_SIZE,
  payload: { type, size }
})

export const changeSorted = (type, sorted) => ({
  type: CHANGE_SORTED,
  payload: { type, sorted }
})

export const updateFilterForm = (type, data) => ({
  type: UPDATE_FILTER_FORM,
  payload: { type, data }
})