import { HELLO_LOADING, HELLO_SUCCESS, HELLO_ERROR } from '../actions/index';
import initialStats from './initialStats';

const helloReducer = (state = initialStats, action) => {
  switch (action.type) {
    case HELLO_LOADING:
      return {
        ...state,
        loading: true,
        data: null,
        err: null,
      };
    case HELLO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        err: null,
      };
    case HELLO_ERROR:
      return {
        ...state,
        loading: false,
        data: null,
        err: action.err,
      };
    default:
      return state;
  }
};

export default helloReducer;
