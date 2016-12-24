import { Router } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactRouter from 'react-router';
import Redux from 'redux';
import { Provider } from 'react-redux';
import Routes from './routes';

let router = Router();

let reducer = (state) => { return state; }

// You can define other routes for your API here
router.get('/api/test', (request, response) => {
  response.json({
    test: 'test'
  })
})

router.get('*', (request, response) => {
  let initialState = { title: 'Universal React' };
  let store = Redux.createStore(reducer, initialState);

  ReactRouter.match({
    routes: Routes,
    location: request.url
  }, (error, redirectLocation, renderProps) => {

    if(renderProps) {
      let html = ReactDomServer.renderToString(
        <Provider store={store}>
          <ReactRouter.RouterContext {...renderProps}  />
        </Provider>
      );
      response.send(html);

    } else {
      response.status(404).send('Not Found');
    }

  });

});

module.exports = router;
