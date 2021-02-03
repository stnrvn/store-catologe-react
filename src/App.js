import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import {
  Home,
  Detail
} from './pages'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/detail/:id'>
          <Detail />
        </Route>
      </Switch>
    </Router>
  )
}

export default App