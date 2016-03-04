import actionTypes from './action_types';


export function setCounting(value) {
  return {
    type: actionTypes.SET_COUNTING,
    value
  };
}


export function incrementCounter() {
  return { type:  actionTypes.INCREMENT_COUNTER };
}


export function resetCounter() {
  return { type: actionTypes.RESET_COUNTER };
}
