import {combineReducers} from 'redux';
import coursesReducer from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses: coursesReducer,
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
