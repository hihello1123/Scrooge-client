import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hello } from './actions';
require('dotenv').config();

function App() {
  const state = useSelector((state) => state.hello);
  const { loading, data, err } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hello());
  }, []);
  if (err) return <div>에러야</div>;
  return (
    <div className="App">
      {loading ? <div>로딩중이야</div> : <div>{data}</div>}
    </div>
  );
}

export default App;
