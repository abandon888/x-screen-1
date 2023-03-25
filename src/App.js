import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Home from './pages/home'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/home' />} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard/:username' component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App
