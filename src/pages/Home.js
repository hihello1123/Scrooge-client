import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Daily from './Daily';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import { deleteModalMessage } from '../actions';

function Home() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { isLoggedIn } = isLoggedInReducer.userLoggedIn;
  const [ismodal, setmodal] = useState(false);
  const modalMessageReducer = useSelector((state) => state.modalMessageReducer);
  const { message, errored } = modalMessageReducer;

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  });

  let url = new URL(window.location.href);

  const authorizationCode = url.searchParams.get('code');

  const handleClick = () => {
    dispatch(deleteModalMessage());
  };

  function modalSet() {
    setmodal(!ismodal);
  }
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
          {ismodal || errored || authorizationCode ? (
            <Login modalSet={modalSet} />
          ) : (
            <></>
          )}
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
