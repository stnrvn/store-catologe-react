import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {
  Home,
  Detail,
  Favorite
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
        <Route path='/favorite'>
          <Favorite />
        </Route>
      </Switch>
    </Router>
  )
}

export default App