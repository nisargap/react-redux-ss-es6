var router = require('express').Router();
var React = require('react');
var ReactDomServer = require('react-dom/server');
var ReactRouter = require('react-router');
var Redux = require('redux');
var Provider = require('react-redux').Provider;
import Routes from './routes';

function reducer(state) { return state; }
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
