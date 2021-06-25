import { combineReducers } from 'redux';
import helloReducer from './helloReducer';
import emailExistsReducer from './emailExistsReducer';

const rootReducer = combineReducers({
  helloReducer,
  emailExistsReducer,
});

export default rootReducer;
