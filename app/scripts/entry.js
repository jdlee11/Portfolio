import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import Body from "./components/body";

let router = (
  <Router history={hashHistory}>
    <Route path="/" component={Body}>
    </Route>
  </Router>
);

console.log("loading");

ReactDOM.render(router,
  document.getElementById('container'));
