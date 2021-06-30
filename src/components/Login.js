import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSignInRequest } from '../actions';
import { useHistory } from 'react-router-dom';

function Login() {
  const userSignInReducer = useSelector((state) => state.userSignInReducer);
  const { signInErr } = userSignInReducer.userSignIn;
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const history = useHistory();

  const loginHandler = async (e) => {
    if (!loginInfo.email || !loginInfo.password) {
      if (!loginInfo.email) {
        //TODO: UX
        alert('이메일을 입력해주세요');
      }
      if (!loginInfo.password) {
        //TODO: UX
        alert('비밀번호를 입력해주세요');
      }
      return;
    }
    e.preventDefault();

    await dispatch(userSignInRequest(loginInfo));
    await history.push({ pathname: '/daily' });
  };

  function inputHandler(e) {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  }
  return (
    <div className="modal_1">
      <img src={process.env.PUBLIC_URL + '/logoXS.png'} alt="스크루지" />
      <form className="modal_2">
        <label className="modal_email" htmlFor="email">
          이메일
        </label>
        <input
          name="email"
          type="email"
          onChange={inputHandler}
          className="email"
          required
        ></input>
        <label className="modal_password" htmlFor="password">
          비밀번호
        </label>
        <input
          name="password"
          type="password"
          onChange={inputHandler}
          className="password"
          required
        ></input>
      </form>
      <button onClick={loginHandler}>로그인</button>
    </div>
  );
}

export default Login;
