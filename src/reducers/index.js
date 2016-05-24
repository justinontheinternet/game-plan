import { combineReducers } from 'redux';
import ReleaseListReducer from './reducer_release_list';
import CurrentGameReducer from './reducer_current_game';

const rootReducer = combineReducers({
  releaseList: ReleaseListReducer,
  currentGame: CurrentGameReducer
});

export default rootReducer;
