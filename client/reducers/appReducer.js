import React, { Component } from 'react';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import CardReducer from './CardReducer';

const appReducer = combineReducers({
    CardReducer
});

export default appReducer;
