import { useEffect } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider, connect, ReactReduxContext } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { createStructuredSelector } from 'reselect'
import { PersistGate } from 'redux-persist/integration/react'

import routes from 'config/routes'
import createStore from 'store'
import { getIsReady } from 'store/selectors/app'
import { getVisitorRole } from 'store/selectors/accounts'

import 'assets/styles/index.less'
import { signInByToken } from 'store/actions/auth'
import { getError, getIsLoaded, getIsLoading } from 'store/selectors/auth'
import { Loading } from 'components/common'
import { getHasToken } from 'store/selectors/persist'

const { store, history, persistor } = createStore({})

let App = ({
  role,
  isReady,
  isSigningIn,
  hasToken,
  autoSignIn
}) => {
  useEffect(() => {
    autoSignIn && autoSignIn()
  }, [autoSignIn])

  return (
    <div className="App">
      {
        (isSigningIn || (hasToken && !isReady)) ?
          <Loading />
        :
          <BrowserRouter>
            { renderRoutes(routes({ isReady, role })) }
          </BrowserRouter>
      }
    </div>
  )
}

App = connect(
  createStructuredSelector({
    error: getError,
    isSigningIn: getIsLoading,
    isSignedIn: getIsLoaded,
    isReady: getIsReady,
    role: getVisitorRole,
    hasToken: getHasToken
  }),
  {
    autoSignIn: signInByToken
  }
)(App)

const Container = () => (
    <Provider store={store} context={ReactReduxContext}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history} context={ReactReduxContext}>
          <App/>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );

export default Container
