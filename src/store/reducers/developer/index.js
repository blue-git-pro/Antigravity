import { combineReducers } from 'redux'

// import certificates from './certificates'
import educations from './educations'
import histories from './histories'
import portfolios from './portfolios'
import employments from './employments'
import profiles from './profiles'

export default combineReducers({
  // certificates,
  educations,
  histories,
  portfolios,
  employments,
  profiles
})
