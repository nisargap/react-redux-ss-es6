import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Index from '../views/Index';
import Layout from '../views/Layout';
import About from '../views/About';

let routes =  (
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Index} />
        <Route path="about" component={About} />
      </Route>
    </Router>
)
export default routes;
