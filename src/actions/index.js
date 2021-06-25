import axios from 'axios';

export const HELLO_LOADING = 'HELLO_LOADING';
export const HELLO_SUCCESS = 'HELLO_SUCCESS';
export const HELLO_ERROR = 'HELLO_ERROR';

// # HELLO
export const hello = () => (dispatch) => {
  dispatch({ type: HELLO_LOADING });

  axios
    .get(process.env.REACT_APP_API_URL + '/')
    .then((res) => {
      dispatch({ type: HELLO_SUCCESS, data: res.data });
    })
    .catch((err) => {
      dispatch({ type: HELLO_ERROR, err });
    });
};

// # AUTH
// 이메일 확인
export const EMAIL_SIGNUP_SUCCESS = 'EMAIL_SIGNUP_SUCCESS';
export const EMAIL_SIGNUP_ERROR = 'EMAIL_SIGNUP_ERROR';

export const checkEmailExists = (email) => (dispatch) => {
  axios
    .post(
      process.env.REACT_APP_API_URL + '/checkemail',
      { email },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    )
    .then(() => {
      dispatch({ type: EMAIL_SIGNUP_SUCCESS });
    })
    .catch(() => {
      dispatch({ type: EMAIL_SIGNUP_ERROR });
    });
};
