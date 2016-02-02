import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { createStore } from 'redux';
import {connect} from 'react-redux';

import Form from '../components/cards/Form';

class editCards extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { cards } = this.props

    return (
      <div className="ui container">
        <main>
          <Form {...this.props}/>
        </main>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        cards: state.CardReducer.cards
    };
}

export default connect(mapStateToProps)(editCards);
