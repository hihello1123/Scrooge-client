import { combineReducers } from 'redux';
import helloReducer from './helloReducer';
import emailExistsReducer from './emailExistsReducer';
import isLoggedInReducer from './isLoggedInReducer';

const rootReducer = combineReducers({
  helloReducer,
  emailExistsReducer,
  isLoggedInReducer,
});

export default rootReducer;
