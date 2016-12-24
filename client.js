var ReactDOM = require('react-dom');
var React = require('react');
import Routes from './routes/routes.jsx';
var Redux = require('redux');
var Provider = require('react-redux').Provider;

function reducer(state) { return state; }
var store = Redux.createStore(reducer, window.PROPS);

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>, document
);
