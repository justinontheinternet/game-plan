import { FETCH_GAME } from '../actions/index';

export default function(state = {}, action) {
  switch(action.type) {
  case FETCH_GAME:
    return action.payload.data.results;
  default:
    return state;
  }
}