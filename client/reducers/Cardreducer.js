
import _ from 'lodash';
import firebase from 'firebase';

const firebaseurl = 'https://yourfirebaseurl.com/cards';
const FB = new Firebase(firebaseurl);

const ADD_CARD = 'CardReducer/ADD_CARD';
const REMOVE_CARD = 'CardReducer/REMOVE_CARD';
const REMOVE_CARD_FB = 'CardReducer/REMOVE_CARD_FB';
const GET_CARDS = 'CardReducer/GET_CARDS';
//-----------------DEFINE YOUR REDUCERS'S INITIAL STATE----------------//
// Example initial state
import {cards} from '../helpers/cards'

const initialState = {
    cards: cards,
    fbcards: [],
    loadinitial: true
};

//------------------------REDUCER LOGIC BY ACTION ---------------------//
// Example reducer
export default function CardReducer(state = initialState, action){
    switch (action.type){
        case ADD_CARD:
        console.log('dispatch - add');
        return Object.assign({}, state, {
          cards: [
            ...state.cards, action.payload
          ]
        })
        case REMOVE_CARD:
        console.log('dispatch - remove');
        return Object.assign({}, state, {
          cards: [
            ...state.cards.slice(0, action.i),
            ...state.cards.slice(action.i + 1)
          ]
        })
        case REMOVE_CARD_FB:
        console.log('dispatch - removeFB');
        let i = _.findIndex(state.fbcards, ['key', action.key]);
        console.log('Lodash Value', i);
        return Object.assign({}, state, {
          fbcards: [
            ...state.fbcards.slice(0, i),
            ...state.fbcards.slice(i + 1)
          ]
        })
        case GET_CARDS:
        console.log('dispatch - getcards');
        return Object.assign({}, state, {
          fbcards: [
            ...state.fbcards, action.payload
          ],
          loadinitial: false
        })
        default:
            return state;
    }
}

//--------------------DEFINE YOUR ACTION METHODS-----------------------//


export function addCard(card){
    return function(dispatch){
        console.log("Adding Card:", card);
        FB.push(card, function(error) {
          if(error) {
            console.log(error);
          }
          //unecessary to dispatch add, since all adds are subscribed in LoadInitial function
          //dispatch({type: ADD_CARD, payload: card})

          }
        )};
}

export function removeCardFB(key){
    return function(dispatch){
        FB.child(key).remove(function(error){
          if (error) {
            console.log(error);
          }
        });
        console.log("Removing Card:", key);
        //dispatch({type: REMOVE_CARD_FB, key});
    };
}

export function initialLoad(){
  return function(dispatch){
      FB.on('child_added', function(data) {
        //let d = Object.assign({}, data.val(), key);
        let d = data.val();
        d.key = data.key();
        console.log('Initial Load Cards', d, data.val(), data.key());
        dispatch({type: GET_CARDS, payload: d});
      })
      FB.on('child_removed', function(data) {
        console.log('Subscribed to Remove', data.val(), data.key());
        let key = data.key();
        dispatch({type: REMOVE_CARD_FB, key});
      });
  };
}
