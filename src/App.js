import React, { useEffect } from 'react';
import AppRouter from './components/Router';
import { useDispatch, useSelector } from 'react-redux';
import {
  refreshTokenRequest,
  getGoogleCode,
  getKakaoCode,
  socialDataDelete,
  deleteModalMessage,
} from './actions';

require('dotenv').config();

function App() {
  const dispatch = useDispatch();
  const modalMessageReducer = useSelector((state) => state.modalMessageReducer);
  const { message, errored } = modalMessageReducer;

  useEffect(() => {
    dispatch(socialDataDelete());
    let url = new URL(window.location.href);
    let address = url.search;

    const authorizationCode = url.searchParams.get('code');
    if (!authorizationCode) {
      return;
    } else if (url.pathname === '/' && address.includes('www.googleapis.com')) {
      dispatch(getGoogleCode(authorizationCode));
    } else if (url.pathname === '/') {
      dispatch(getKakaoCode(authorizationCode));
    }

    dispatch(refreshTokenRequest());
  }, [dispatch]);
  return (
    <>
      <AppRouter />
    </>
  );
}

export default App;
