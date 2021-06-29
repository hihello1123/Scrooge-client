import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userSignInRequest } from '../actions';

function Login() {
  const userSigninReducer = useSelector((state) => state.userSigninReducer);
  const { signInErr } = userSigninReducer.userSignIn;
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

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

    dispatch(userSignInRequest(loginInfo));
  };

  function inputHandler(e) {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <form>
        <div>
          <label className="email" htmlFor="email">
            이메일
          </label>
          <input
            name="email"
            type="email"
            onChange={inputHandler}
            className="email"
            required
          ></input>
        </div>
        <div>
          <label className="password" htmlFor="password">
            비밀번호
          </label>
          <input
            name="password"
            type="password"
            onChange={inputHandler}
            className="password"
            required
          ></input>
        </div>
      </form>
      <button onClick={loginHandler}>로그인</button>
    </div>
  );
}

export default Login;
