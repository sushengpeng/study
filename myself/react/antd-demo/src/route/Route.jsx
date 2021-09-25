import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Index from "./pages/Index"
import About from "./pages/About"
import Other from "./pages/Other"
import Comment from "./pages/Comment"
import getComponent from '../Component/common/getComponent';
ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={Index} />
    <Redirect to='/' />
    <Switch>
      <Route path="/other" component={Other} />
      <Route path="/about" component={About} />
      <Route path="/comment" component={Comment} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

const routes = [
  {
    path:'/',
    component: (props) => getComponent(props, () => import('../pages/Index'))
  }
]