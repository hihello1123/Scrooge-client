import {
  GET_USERINFO,
  GET_USERINFO_SUCCESS,
  DELETE_USERINFO,
} from '../actions';
import initialStats from './initialStats';

const userInfoReducer = (state = initialStats, action) => {
  switch (action.type) {
    case GET_USERINFO:
      return {
        ...state,
        userInfo: {
          loading: true,
        },
      };
    case GET_USERINFO_SUCCESS:
      return {
        ...state,
        userInfo: {
          loading: false,
          userName: action.userInfo.username,
          userEmail: action.userInfo.email,
          userPhoto: action.userInfo.photo,
          userLevel: action.userInfo.level,
          userEXP: action.userInfo.experience,
        },
      };
    case DELETE_USERINFO:
      return {
        ...state,
        userInfo: {
          loading: false,
          userName: null,
          userEmail: null,
          userPhoto: null,
          userLevel: null,
          userEXP: null,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default userInfoReducer;
