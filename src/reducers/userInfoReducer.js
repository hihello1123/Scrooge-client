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
          userName: action.data.userInfo.username,
          userEmail: action.data.userInfo.email,
          userPhoto: action.data.userInfo.photo,
          userLevel: action.data.userInfo.level,
          userEXP: action.data.userInfo.experience,
        },
        userset: {
          darkMode: action.data.userset.darkmode,
          redirect: '/daily',
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
        userset: {
          darkMode: false,
          redirect: '/daily',
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default userInfoReducer;
