import ReactDOM from 'react-dom';
import React from 'react';
import Routes from './routes/routes.jsx';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let reducer = (state) => { return state; }

let store = createStore(reducer, window.PROPS);

ReactDOM.render(
  <Provider store={store}>
    {Routes}
  </Provider>, document
);
