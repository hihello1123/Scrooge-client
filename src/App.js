import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hello } from './actions';

function App() {
  const state = useSelector((state) => state.helloReducer);
  const { loading, data, err } = state;
  const dispatch = useDispatch();

  const helloHandle = () => {
    dispatch(hello());
<<<<<<< HEAD
  }, []);
  if (err) return <div>에러야</div>;
  return (
    <div className="App">
      {loading ? <div>로딩중이야</div> : <div>{data}</div>}
=======
  };
  if (err) return <div>에러야</div>;
  return (
    <div className="App">
      <button onClick={helloHandle}>호출</button>
      <div>{loading ? <div>로딩중이야</div> : <div>{data}</div>}</div>
>>>>>>> 3e06f76251093c9e71804aa1f7f2405cf2e1508f
    </div>
  );
}

export default App;
