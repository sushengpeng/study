import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import asyncComponent from '../components/asyncComponent'
const IndexPages = asyncComponent(() => import("@/pages/IndexPages"))
const Classify = asyncComponent(() => import("@/pages/Classify"))
const Discovery = asyncComponent(() => import("@/pages/Discovery"))
const Buycar = asyncComponent(() => import("@/pages/Buycar"))
const Mine = asyncComponent(() => import("@/pages/Mine"))
const Tab = asyncComponent(() => import('@/components/Tab'))
const Test = asyncComponent(() => import("@/pages/TestComponent"))

export default class route extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/index' component={IndexPages} />
          <Route path='/classify' component={Classify} />
          <Route path='/discovery' component={Discovery} />
          <Route path='/buycar' component={Buycar} />
          <Route path='/mine' component={Mine} />
          <Route path='/test' component={Test} />
          <Redirect from='' to="/index" />
        </Switch>
        {/* <Switch>
          <Route path="/other" component={Other} />
          <Route path="/about" component={About} />
        </Switch> */}
        <Tab />
      </BrowserRouter>
    )
  }
}
