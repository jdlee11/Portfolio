import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import MainBody from "./components/mainBody";

let router = (
  <Router>
    <Route path="/" component={MainBody}>
    </Route>
  </Router>
);

ReactDOM.render(router,
  document.getElementById('container'));
