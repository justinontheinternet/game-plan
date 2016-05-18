import { FETCH_RELEASE_LIST } from '../actions/index';

const INITIAL_STATE = { upcoming: [] }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_RELEASE_LIST:
    return{ upcoming: action.payload.data };
  default:
    return state;
  }
}