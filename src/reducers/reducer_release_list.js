import { FETCH_RELEASE_LIST } from '../actions/index';

export default function(state = [], action) {
  switch(action.type) {
  case FETCH_RELEASE_LIST:
    return action.payload.data.results;
  default:
    return state;
  }
}