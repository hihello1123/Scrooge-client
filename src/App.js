import React, { useEffect } from 'react';
import AppRouter from './components/Router';
import { useDispatch } from 'react-redux';
import { refreshTokenRequest } from './actions';
require('dotenv').config();

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshTokenRequest());
  }, [dispatch]);
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
