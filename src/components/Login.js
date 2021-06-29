import React, { useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { userLogin } from '../actions';

function Login() {
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { isLoggedIn } = isLoggedInReducer.userLoggedIn;
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    if (!loginInfo.email || !loginInfo.password) {
      if (!loginInfo.email) {
        alert('이메일을 입력해주세요');
      }
      if (!loginInfo.password) {
        alert('비밀번호를 입력해주세요');
      }
      return;
    }

    e.preventDefault();

    console.log(loginInfo);
    await axios
      .post(
        `${process.env.REACT_APP_API_URL}` + '/login',
        { email: loginInfo.email, password: loginInfo.password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
        dispatch(userLogin(res.data.data.accessToken));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  function inputHandler(e) {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
    console.log(loginInfo);
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
