import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Daily from './Daily';
import Login from '../components/Login';
import Logo from '../components/Logo';
import { getGoogleCode, getKakaoCode, socialDataDelete } from '../actions';
import { ArrowDownIcon, LockClosedIcon } from '@heroicons/react/outline';

function Home() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { isLoggedIn } = isLoggedInReducer.userLoggedIn;
  const [isModal, setModal] = useState(false);

  const modalMessageReducer = useSelector((state) => state.modalMessageReducer);
  const { message, errored } = modalMessageReducer;

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  });

  const handleClick = () => {
    dispatch(deleteModalMessage());
  };

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
  }, [dispatch]);

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
          {isModal ? <Login modalSet={modalSet} /> : <></>}
          <nav className="top_nav">
            <div></div>
            <div>
              <Logo />
            </div>
            <div className="btn_group">
              <button className="signin_btn" onClick={modalSet}>
                <LockClosedIcon className="signin_btn_icon" />
                로그인
              </button>
              <Link to="/signup" className="signup_btn">
                가계부 쓰기
              </Link>
            </div>
          </nav>

          <section className="home_main">
            <h1>
              <strong>효율적</strong>인 <br />
              <strong>지출습관</strong>을 <br />
              만들어주는 <strong>스크루지</strong>
            </h1>
            <button className="signup_btn">가계부 쓰기</button>
            <button className="scroll_btn">
              기능 더보기 <ArrowDownIcon className="scroll_btn_icon" />
            </button>
          </section>
          <svg
            className="bg_svg_1"
            xmlns="http://www.w3.org/2000/svg"
            width="452"
            height="115"
            viewBox="0 0 452 115"
            fill="none"
          >
            <rect
              x="95.9531"
              y="114.414"
              width="368"
              height="368"
              rx="34"
              transform="rotate(-105 95.9531 114.414)"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="423.159"
                y1="114.414"
                x2="162.669"
                y2="436.945"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6F88FC" />
                <stop offset="1" stopColor="#6F88FC" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="bg_svg_2"
            xmlns="http://www.w3.org/2000/svg"
            width="593"
            height="593"
            viewBox="0 0 593 593"
            fill="none"
          >
            <circle
              cx="296.5"
              cy="296.5"
              r="216.5"
              transform="rotate(30 296.5 296.5)"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="465"
                y1="80.0004"
                x2="158.5"
                y2="459.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6F88FC" />
                <stop offset="1" stopColor="#6F88FC" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="bg_svg_3"
            xmlns="http://www.w3.org/2000/svg"
            width="385"
            height="433"
            viewBox="0 0 385 433"
            fill="none"
          >
            <circle
              cx="168.5"
              cy="216.5"
              r="216.5"
              transform="rotate(-180 168.5 216.5)"
              fill="url(#paint0_linear)"
            />
            <defs>
              <linearGradient
                id="paint0_linear"
                x1="337"
                y1="-2.36893e-05"
                x2="30.5"
                y2="379.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#6F88FC" />
                <stop offset="1" stopColor="#6F88FC" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
      {errored ? (
        <div className="homeModal">
          <div className="homeModal_message">{message}</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Home;
