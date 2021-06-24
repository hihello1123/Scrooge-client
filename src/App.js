import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hello } from './actions';

function App() {
  const state = useSelector((state) => state.helloReducer);
  const { loading, data, err } = state;
  const dispatch = useDispatch();

  const helloHandle = () => {
    dispatch(hello());
  };
  if (err) return <div>에러야</div>;
  return (
    <div className="App">
      <button onClick={helloHandle}>호출</button>
      <div>{loading ? <div>로딩중이야</div> : <div>{data}</div>}</div>
    </div>
  );
}

export default App;
