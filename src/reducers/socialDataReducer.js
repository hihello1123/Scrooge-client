import { SOCIAL_DATA } from '../actions';
import initialStats from './initialStats';

const socialDataReducer = (state = initialStats, action) => {
  switch (action.type) {
    case SOCIAL_DATA:
      console.log(action);
      return {
        ...state,
        socialData: {
          email: action.socialData.email,
          photo: action.socialData.photo,
          username: action.socialData.username,
        },
      };
    default:
      return state;
  }
};

export default socialDataReducer;
