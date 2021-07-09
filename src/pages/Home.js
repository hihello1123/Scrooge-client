import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Daily from './Daily';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import {
  refreshTokenRequest,
  getGoogleCode,
  getKakaoCode,
  socialDataDelete,
  deleteModalMessage,
} from '../actions';

function Home() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { isLoggedIn } = isLoggedInReducer.userLoggedIn;
  const modalMessageReducer = useSelector((state) => state.modalMessageReducer);
  const { message, errored } = modalMessageReducer;

  const [isModal, setModal] = useState(false);

  useEffect(() => {
    dispatch(socialDataDelete());
    let url = new URL(window.location.href);
    let address = url.search;

    const authorizationCode = url.searchParams.get('code');
    if (!authorizationCode) {
      return;
    } else if (url.pathname === '/' && address.includes('www.googleapis.com')) {
      dispatch(getGoogleCode(authorizationCode));
      setModal(true);
    } else if (url.pathname === '/') {
      dispatch(getKakaoCode(authorizationCode));
      setModal(true);
    }

    dispatch(refreshTokenRequest());
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, [dispatch]);

  const handleClick = () => {
    dispatch(deleteModalMessage());
  };

  const modalSet = () => {
    setModal(!isModal);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Daily />
        </>
      ) : (
        <div>
          <button onClick={modalSet}>
            임시 랜딩페이지 👻 글씨 눌러서 로그인하기!!!{' '}
          </button>
          {isModal ? <Login modalSet={modalSet} /> : <></>}
          {errored ? (
            <div className="homeModal">
              <div className="homeModal_message">{message}</div>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
}

export default Home;
