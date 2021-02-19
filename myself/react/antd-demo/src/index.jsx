import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Index from "./pages/Index"
import About from "./pages/About"
import Other from "./pages/Other"
ReactDOM.render(
  <BrowserRouter>
    <Route path='/' component={Index} />
    <Redirect to='/' />
    <Switch>
      <Route path="/other" component={Other} />
      <Route path="/about" component={About} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
