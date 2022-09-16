import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from './routes'
import Topbar from './components/topbar'
import {CurrentUserProvider} from './contexts/currentUser'
import CurrentUserChecker from './components/currentUserChecker'
import Membership from './components/membership'
import Feed from './components/feed'
import GlobalFeed from './pages/globalFeed'
import { render } from 'react-dom'

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <Topbar />
          <Routes />
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
