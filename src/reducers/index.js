import { combineReducers } from 'redux';
import helloReducer from './helloReducer';

const rootReducer = combineReducers({
  helloReducer,
  todosReducer: null,
});

export default rootReducer;
