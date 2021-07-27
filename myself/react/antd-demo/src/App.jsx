import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import Index from "./pages/Index"
import About from "./pages/About"
import Other from "./pages/Other"
let store = createStore(todoApp)
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <Route path='/' component={Index} />
        <Redirect to='/' />
        <Switch>
          <Route path="/other" component={Other} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    )
  }
}
