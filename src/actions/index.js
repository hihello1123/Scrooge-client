import axios from 'axios';

export const HELLO_LOADING = 'HELLO_LOADING';
export const HELLO_SUCCESS = 'HELLO_SUCCESS';
export const HELLO_ERROR = 'HELLO_ERROR';

// # HELLO
export const hello = () => (dispatch) => {
  dispatch({ type: HELLO_LOADING });

  axios
    .get(`${process.env.REACT_APP_API_URL}/`)
    .then((res) => {
      dispatch({ type: HELLO_SUCCESS, data: res.data });
    })
    .catch((err) => {
      dispatch({ type: HELLO_ERROR, err });
    });
};

// # AUTH
// 로그인 상태 ==========================================
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';

export const userLogin = (accessToken) => {
  return {
    type: USER_LOGIN,
    accessToken,
  };
};

// 리프레쉬 토큰
export const refreshTokenRequest = () => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/refreshtokenrequest`, {
      withCredentials: true,
    })
    .then((res) => {
      dispatch(userLogin(res.data.data.accessToken));
    })
    .catch((err) => {
      console.log(err.response);
    });
};

// 로그아웃 ==========================================
export const userLogOut = (accessToken, history) => (dispatch) => {
  axios
    .get(`${process.env.REACT_APP_API_URL}/signout`, {
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${accessToken}`,
      },
      withCredentials: true,
    })
    .then(() => {
      dispatch({ type: USER_LOGOUT });
      dispatch(deleteUserInfo());
      history.push({ pathname: '/' });
    });
};

// 이메일 확인 ==========================================
export const EMAIL_SIGNUP = 'EMAIL_SIGNUP';
export const EMAIL_SIGNUP_SUCCESS = 'EMAIL_SIGNUP_SUCCESS';
export const EMAIL_SIGNUP_ERROR = 'EMAIL_SIGNUP_ERROR';

export const checkEmailExists = (email) => (dispatch) => {
  dispatch({ type: EMAIL_SIGNUP });
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/checkemail`,
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

// 회원가입 =======================================
export const userSignUpRequest = (fd, history) => (dispatch) => {
  axios
    .post(`${process.env.REACT_APP_API_URL}/signup`, fd, {
      headers: { 'Content-Type': 'multipart/form-data' },
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data.message);
      dispatch({ type: EMAIL_SIGNUP }); //이메일 체크 완료상태 펄스로 바꾸기
      dispatch(goToHome(history));
    })
    .catch((err) => {
      console.log(err.response);
    });
};

// 로그인 ==========================================
export const USER_SIGNIN_ERROR = 'USER_SIGNIN_ERROR';

export const userSignInRequest = (loginInfo) => (dispatch) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/login`,
      { email: loginInfo.email, password: loginInfo.password },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    )
    .then((res) => {
      dispatch(userLogin(res.data.data.accessToken));
    })
    .catch((err) => {
      dispatch({ type: USER_SIGNIN_ERROR, err });
    });
};

// # 겟
// 홈으로 이동
export const goToHome = (history) => () => {
  history.push('/');
};

// #USERINFO ===================
export const GET_USERINFO = 'GET_USERINFO';
export const GET_USERINFO_SUCCESS = 'GET_USERINFO_SUCCESS';
export const DELETE_USERINFO = 'DELETE_USERINFO';

export const getUserInfo = (accessToken, history) => (dispatch) => {
  dispatch({ type: GET_USERINFO });
  axios
    .get(`${process.env.REACT_APP_API_URL}/initialize`, {
      headers: { authorization: `bearer ${accessToken}` },
      withCredentials: true,
    })
    .then((res) => {
      console.log(res.data);
      dispatch(writeUserInfo(res.data.data));
      return res;
    })
    .then((res) => {
      const redirect = res.data.data.userset.redirect;
      history.push(redirect); // 기본값 /daily
    })
    .catch((err) => {
      console.log(err.response);
    });
};
// 유저정보 저장
export const writeUserInfo = (data) => (dispatch) => {
  dispatch({ type: GET_USERINFO_SUCCESS, data });
};

// 탈퇴 =========================
export const deleteUserInfo = () => (dispatch) => {
  dispatch({ type: DELETE_USERINFO });
};

// #DAILY
export const GET_DAILY = 'GET_DAILY';
export const GET_DAILY_SUCCESS = 'GET_DAILY_SUCCESS';

export const getDaily = (accessToken) => (dispatch) => {
  dispatch({ type: GET_DAILY });
  axios
    .get(`${process.env.REACT_APP_API_URL}/daypage`, {
      headers: {
        authorization: `bearer ${accessToken}`,
      },
      withCredentials: true,
    })
    .then((res) => {
      dispatch(setDaily(res.data.data));
    })
    .catch((err) => {
      console.log(err.response);
    });
};

export const setDaily = (daily) => {
  return {
    type: GET_DAILY_SUCCESS,
    daily,
  };
};

export const postDaily = (data, accessToken) => (dispatch) => {
  axios
    .post(
      `${process.env.REACT_APP_API_URL}/createspendmoney`,
      {
        categoryname: data.categoryname,
        cost: data.cost,
        memo: data.memo,
        date: data.date,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          authorization: `bearer ${accessToken}`,
        },
        withCredentials: true,
      }
    )
    .then((res) => {
      dispatch(getDaily(accessToken));
    })
    .catch((err) => {
      console.log(err.response);
    });
};

// 이니셜라이즈
