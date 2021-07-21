import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { createStructuredSelector } from 'reselect'
import { loadUser } from 'store/actions/accounts'

import { getProfile } from 'store/selectors/developer'
import { getSelectedUser } from 'store/selectors/accounts'
import Resume from 'components/profile/resume'
import About from 'components/profile/about'
import Portfolio from 'components/profile/portfolio'

const Profile = ({
  user,
  profile,
  loadUser
}) => {
  const match = useRouteMatch()

  useEffect(() => {
    match && loadUser(match.params.id)
  }, [match])

  return (
    <div className="page-profile">
      <About user={user} profile={profile}/>
      <Resume />
      <Portfolio />
    </div>
  )
}

export default connect(
  createStructuredSelector({
    user: getSelectedUser,
    profile: getProfile,
  }),
  {
    loadUser
  }
)(Profile)