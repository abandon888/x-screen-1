import React from 'react'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './pages/dashboard'
import Login from './pages/login'
import Home from './pages/home'
import Model, { Model1, Model2 } from './pages/model'

function App () {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='/home' />} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard/:username' component={Dashboard} />
        <Route exact path='/model' component={Model} />
        <Route exact path='/model/model1' component={Model1} />
        <Route exact path='/model/model2' component={Model2} />
      </Switch>
    </Router>
  )
}

export default App
