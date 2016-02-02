'use strict'

import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux';
import { initialLoad } from '../reducers/CardReducer';

import List from '../components/cards/List'
import Form from '../components/cards/Form'

class CardsContainer extends Component {

  static propTypes = {
    initialCards: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props)

  }
  componentWillMount() {
    const { dispatch, loadinitial  } = this.props;
    console.log('loadinitial', loadinitial);
    if(loadinitial){
      dispatch(initialLoad());
    }
      }

  render() {
    let { fbcards } = this.props;
    let cards = (this.props.params.Id) ?
      (fbcards.filter(fbcard => fbcard.key === this.props.params.Id)) : (fbcards);
    return (
      <div>
        <div className="ui items">
          <main>
          <List {...this.props} cards={ cards } />
          </main>
      </div>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        fbcards: state.CardReducer.fbcards,
        loadinitial: state.CardReducer.loadinitial
    };
}

export default connect(mapStateToProps)(CardsContainer);
