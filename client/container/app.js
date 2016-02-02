import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { createStore } from 'redux';
import {connect} from 'react-redux';
import Header from '../components/common/header';

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="ui container">
        <Header />
        {this.props.children}
      </div>
    )
  }
}
