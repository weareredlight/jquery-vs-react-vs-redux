import { combineReducers } from 'redux';

import actionTypes from './action_types';


function counting(state=false, action) {
  switch (action.type) {
  case actionTypes.SET_COUNTING:
    return action.value;
  case actionTypes.RESET_COUNTER:
    return false;
  default:
    return state;
  }
}


function totalCount(state=0, action) {
  switch (action.type) {
  case actionTypes.INCREMENT_COUNTER:
    return state + 1;
  case actionTypes.RESET_COUNTER:
    return 0;
  default:
    return state;
  }
}


export default combineReducers({ counting, totalCount });
