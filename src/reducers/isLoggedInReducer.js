import { USER_LOGIN, USER_LOGOUT } from '../actions/index';
import initialStats from './initialStats';

const emailExistsReducer = (state = initialStats, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        userLoggedIn: {
          isLoggedIn: true,
          accessToken: action.accessToken,
        },
      };
    case USER_LOGOUT:
      return {
        ...state,
        userLoggedIn: {
          isLoggedIn: false,
          accessToken: null,
        },
      };
    default:
      return state;
  }
};

export default emailExistsReducer;
