import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Daily from './Daily';

function Home() {
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { isLoggedIn, accessToken } = isLoggedInReducer.userLoggedIn;
  return (
    <>
      {isLoggedIn ? (
        <>
          <Daily />
        </>
      ) : (
        <div>
          <Link to="/signup">회원가입</Link>
        </div>
      )}
    </>
  );
}

export default Home;
