import { HELLO_LOADING, HELLO_SUCCESS, HELLO_EROOR } from '../actions/index';
import initialStats from './initialStats';

const hello = (state = initialStats, action) => {
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
    case HELLO_EROOR:
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

export default hello;
