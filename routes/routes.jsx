import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Index from '../views/Index';
import Layout from '../views/Layout';
import About from '../views/About';
import * as ReactGA from 'react-ga';
import { config } from '../config';

let logPageView = () => { return null; }

if(typeof window === "object") {

  ReactGA.initialize(config["GA_CODE"]);

  logPageView = () => {

    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);

  }

}

let routes =  (
    <Router history={browserHistory} onUpdate={logPageView}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Index} />
        <Route path="about" component={About} />
      </Route>
    </Router>
)
export default routes;
