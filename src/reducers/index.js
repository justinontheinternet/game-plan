import { combineReducers } from 'redux';
import ReleaseList from './reducer_release_list';

const rootReducer = combineReducers({
  releaseList: ReleaseList
});

export default rootReducer;
