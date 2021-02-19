import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react'
import IndexPages from "@/pages/IndexPages"
import Classify from "@/pages/Classify"
import Discovery from "@/pages/Discovery"
import Buycar from "@/pages/Buycar"
import Mine from "@/pages/Mine"
import Tab from '@/components/Tab'

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
