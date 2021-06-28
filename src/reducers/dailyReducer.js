import { GET_DAILY } from '../actions';
import initialStats from './initialStats';

const dailyReducer = (state = initialStats, action) => {
  switch (action.type) {
    case GET_DAILY:
      console.log(action);
      return {
        ...state,
        daily: {
          top: {
            monthlyBudget: action.daily.top.monthlyBudget,
            monthlyUsed: action.daily.top.monthlyUsed,
            exmonothlyUsed: action.daily.top.exmonthlyUsed,
          },
          bottom: null,
        },
      };
    default:
      return state;
  }
};

export default dailyReducer;
