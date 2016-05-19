import { combineReducers } from 'redux';
import ReleaseListReducer from './reducer_release_list';

const rootReducer = combineReducers({
  releaseList: ReleaseListReducer
});

export default rootReducer;
