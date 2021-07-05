import { combineReducers } from 'redux';
import helloReducer from './helloReducer';
import emailExistsReducer from './emailExistsReducer';
import isLoggedInReducer from './isLoggedInReducer';
import userInfoReducer from './userInfoReducer';
import dailyReducer from './dailyReducer';
import userSignInReducer from './userSignInReducer';
import socialDataReducer from './socialDataReducer';
import yearlyReducer from './yearlyReducer';
import getBudgetReducer from './getBudgetReducer';

const rootReducer = combineReducers({
  helloReducer,
  emailExistsReducer,
  isLoggedInReducer,
  userInfoReducer,
  dailyReducer,
  userSignInReducer,
  socialDataReducer,
  yearlyReducer,
  getBudgetReducer,
});

export default rootReducer;
