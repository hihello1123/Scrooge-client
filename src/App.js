import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { refreshTokenRequest } from './actions';
import AppRouter from './components/Router';

require('dotenv').config();

function App() {
  const dispatch = useDispatch();

  const modalMessageReducer = useSelector((state) => state.modalMessageReducer);
  const { message, errored } = modalMessageReducer;
  useEffect(() => {
    dispatch(refreshTokenRequest());
  }, [dispatch]);
  // };

  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
