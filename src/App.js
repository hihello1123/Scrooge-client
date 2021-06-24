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
  if (err) return <div>{err}</div>;
  return (
    <div className="App">{loading ? <div>{data}</div> : <div>머냐!</div>}</div>
  );
}

export default App;
