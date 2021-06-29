import { GET_DAILY } from '../actions';
import initialStats from './initialStats';

const dailyReducer = (state = initialStats, action) => {
  switch (action.type) {
    case GET_DAILY:
      console.log(action.daily);
      return {
        ...state,
        daily: {
          top: {
            monthlyBudget: action.daily.top.monthlyBudget,
            monthlyUsed: action.daily.top.monthlyUsed,
            exmonthlyUsed: action.daily.top.exmonthlyUsed,
          },
          bottom: action.daily.bottom,
          categorylist: action.daily.categorylist,
        },
      };
    default:
      return state;
  }
};

export default dailyReducer;
