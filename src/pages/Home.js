import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Daily from './Daily';
import Login from '../components/Login';

function Home() {
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { isLoggedIn } = isLoggedInReducer.userLoggedIn;
  const [ismodal, setmodal] = useState(false);

  function modalSet(e) {
    if (ismodal === false) {
      setmodal(true);
    } else if (ismodal === true) {
      setmodal(false);
    }
  }
  return (
    <>
      {isLoggedIn ? (
        <>
          <Daily />
        </>
      ) : (
        <div>
          <button onClick={modalSet}>모달창 소환</button>
          {ismodal ? (
            <div className="modal">
              <Login />
              <div>
                @#$%지금바로가입하기%$#@ ☞ <Link to="/signup">회원가입</Link>
              </div>
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
