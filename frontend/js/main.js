import $ from 'jquery';
import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';

import mainReducer from './reducers';

import { initJqueryTimer } from 'jquery_timer';
import { ReactTimer      } from 'react_timer';
import   ReduxTimer        from 'redux_timer';


const store = createStore(
  mainReducer,
  applyMiddleware(createLogger())
);


$(document).ready(() => {
  initJqueryTimer();
  ReactDOM.render(React.createElement(ReactTimer), document.getElementById('react-timer'));
  ReactDOM.render(React.createElement(Provider, { store }, React.createElement(ReduxTimer)),
                  document.getElementById('redux-timer'));
});
