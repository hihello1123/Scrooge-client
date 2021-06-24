import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hello } from './actions';
import Signup from './pages/signup';
import Logo from './components/Logo';

function App() {
  const [isLogin, setLogin] = useState(false);
  const state = useSelector((state) => state.helloReducer);
  const { loading, data, err } = state;
  const dispatch = useDispatch();

  const helloHandle = () => {
    dispatch(hello());
    setLogin(true);
  };
  if (err) return <div>에러야</div>;
  return (
    <div className="app">
      <Logo className="logo" />
      {isLogin ? (
        <Signup />
      ) : (
        <div>
          <button onClick={helloHandle}>회원가입</button>
          <div>{loading ? <div>로딩중이야</div> : <div>{data}</div>}</div>
        </div>
      )}
    </div>
  );
}

export default App;
