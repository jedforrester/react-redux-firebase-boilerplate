import React, { Component, PropTypes } from 'react';
import Card from './card';
import { removeCard, removeCardFB } from '../../reducers/CardReducer';


export default class List extends Component {
  static propTypes = {
    cards: PropTypes.array.isRequired  };


  constructor(props) {
    super(props)
    this.removeCard = this.removeCard.bind(this);

  }

  removeCard(key){
    const { dispatch } = this.props;
    dispatch(removeCardFB(key));
  };

  render() {
    const { removeBook, cards } = this.props

    let cardsfromfb = cards.map((card, i) => {
      return (
        <div key={i} className="ui segment">
          <Card key={card.key} id={card.key} header={card.header} body={ card.body } type={ card.type }>
              <button style={{float: "right"}} className="btn btn-danger" onClick={ this.removeCard.bind(this, card.key) }>
                Delete
              </button>
          </Card>
          <br />

        </div>
      )
    });

    return (
      <div className="cardList">
        { cardsfromfb }
      </div>
    )
  }
}
