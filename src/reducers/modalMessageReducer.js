import { SAVE_MODAL_MESSAGE, DELETE_MODAL_MESSAGE } from '../actions';
import initialStats from './initialStats';

const modalMessageReducer = (state = initialStats.modalMessage, action) => {
  switch (action.type) {
    case SAVE_MODAL_MESSAGE:
      return {
        ...state,
        message: action.message,
        errored: true,
      };
    case DELETE_MODAL_MESSAGE:
      return { ...state, message: null, errored: false };
    default:
      return state;
  }
};

export default modalMessageReducer;
