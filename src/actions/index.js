import axios from 'axios';

export const HELLO_LOADING = 'HELLO_LOADING';
export const HELLO_SUCCESS = 'HELLO_SUCCESS';
export const HELLO_ERROR = 'HELLO_ERROR';

export const hello = () => async (dispatch) => {
  dispatch({ type: HELLO_LOADING });

  axios
    .get(process.env.REACT_APP_API_URL + '/')
    .then((res) => {
      dispatch({ type: HELLO_SUCCESS, data: res });
    })
    .catch((err) => {
      dispatch({ type: HELLO_ERROR, err });
    });
};
