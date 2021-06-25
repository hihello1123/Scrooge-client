import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hello } from './actions';
import Signup from './pages/Signup';
import Logo from './components/Logo';
import axios from 'axios';

function App() {
  const state = useSelector((state) => state.helloReducer);
  const { loading, data, err } = state;
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const helloHandle = () => {
    dispatch(hello());
    setLogin(true);
  };
  if (err) return <div>에러야</div>;

  const loginHandler = async (e) => {
    if (!loginData.email || !loginData.password) {
      if (!loginData.email) {
        alert('이메일을 입력해주세요');
      }
      if (!loginData.password) {
        alert('비밀번호를 입력해주세요');
      }
      return;
    }

    e.preventDefault();

    console.log(loginData);
    await axios
      .post(
        'https://api.scrooge.today/login',
        { email: loginData.email, password: loginData.password },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  function inputHandler(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    console.log(loginData);
  }

  return (
    <div className="app">
      <Logo className="logo" />
      {isLogin ? (
        <Signup />
      ) : (
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
            <button onClick={loginHandler}>로그인</button>
          </form>
          <button onClick={helloHandle}>회원가입</button>
          <div>{loading ? <div>로딩중이야</div> : <div>{data}</div>}</div>
        </div>
      )}
    </div>
  );
}

export default App;
