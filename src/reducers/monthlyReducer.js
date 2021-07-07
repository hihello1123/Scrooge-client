import { MONTHLY_DATA } from '../actions';
import initialStats from './initialStats';

const monthlyReducer = (state = initialStats, action) => {
  switch (action.type) {
    case MONTHLY_DATA:
      return { ...state, monthlyData: { data: action.data } };
    default:
      return state;
  }
};

export default monthlyReducer;
