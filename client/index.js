import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import App from './container/app';
import CardsContainer from './container/CardsContainer';
import editCards from './container/editCards';
import { Router, Route, Link, browserHistory } from 'react-router'

import appReducer from './reducers/appReducer';

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStoreWithMiddleware(appReducer);

render((
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/cards" component={CardsContainer}>
        <Route path="/cards/:Id" component={CardsContainer} />
      </Route>
      <Route path="/editCards" component={editCards}/>
    </Route>
  </Router></Provider>
), document.querySelector('#root'));
