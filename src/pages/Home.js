import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Daily from './Daily';
import Login from '../components/Login';
import Logo from '../components/Logo';
import {
  getGoogleCode,
  getKakaoCode,
  socialDataDelete,
  experimentLogin,
} from '../actions';
import {
  ArrowDownIcon,
  LockClosedIcon,
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/outline';

function Home() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { isLoggedIn } = isLoggedInReducer.userLoggedIn;
  const [isLoginModal, setLoginModal] = useState(false);

  //======================================
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  });
  const handleClick = () => {
    setModalMessage('');
  };

  //=====================================

  useEffect(() => {
    dispatch(socialDataDelete());
    let url = new URL(window.location.href);
    let address = url.search;

    const authorizationCode = url.searchParams.get('code');
    if (!authorizationCode) {
      return;
    } else if (url.pathname === '/' && address.includes('www.googleapis.com')) {
      dispatch(getGoogleCode(authorizationCode));
      setLoginModal(true);
    } else if (url.pathname === '/') {
      dispatch(getKakaoCode(authorizationCode));
      setLoginModal(true);
    }
  }, [dispatch]);

  const modalSet = () => {
    setLoginModal(!isLoginModal);
  };

  const itemlist = [
    {
      title: '1번사진',
      inform: '1번사진의 내용들',
      photo: process.env.PUBLIC_URL + '/first.png',
      id: 0,
    },
    {
      title: '2번사진',
      inform: '2번사진의 내용들',
      photo: process.env.PUBLIC_URL + '/second.png',
      id: 1,
    },
    {
      title: '3번사진',
      inform: '3번사진의 내용들',
      photo: process.env.PUBLIC_URL + '/third.png',
      id: 2,
    },
    {
      title: '4번사진',
      inform: '4번사진의 내용들',
      photo: process.env.PUBLIC_URL + '/fourth.png',
      id: 3,
    },
    {
      title: '5번사진',
      inform: '5번사진의 내용들',
      photo: process.env.PUBLIC_URL + '/fifth.png',
      id: 4,
    },
    {
      title: '6번사진',
      inform: '6번사진의 내용들',
      photo: process.env.PUBLIC_URL + '/sixth.png',
      id: 5,
    },
  ];

  const [showItem, setItem] = useState({
    title: '1번사진',
    inform: '1번사진의 내용들',
    photo: process.env.PUBLIC_URL + '/first.png',
    id: 0,
  });

  const slidePlusBtn = (e) => {
    if (showItem.id === 5) {
      setItem({ ...showItem, ...itemlist[0] });
    } else {
      let filtered = itemlist.filter((el) => {
        if (showItem.id === 6) {
          return el.id === 0;
        } else {
          return el.id === showItem.id + 1;
        }
      });
      setItem({ ...showItem, ...filtered[0] });
      console.log(filtered);
      console.log(showItem);
    }
  };

  const slideMinusBtn = (e) => {
    if (showItem.id === 0) {
      setItem({ ...showItem, ...itemlist[5] });
    } else {
      let filtered = itemlist.filter((el) => {
        if (showItem.id === 0) {
          return el.id === 6;
        } else {
          return el.id === showItem.id - 1;
        }
      });
      setItem({ ...showItem, ...filtered[0] });
    }
  };

  const testLogin = () => {
    dispatch(experimentLogin(setModalMessage));
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Daily />
        </>
      ) : (
        <div>
          {isLoginModal ? <Login modalSet={modalSet} /> : <></>}
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
              <button className="testLogin" onClick={testLogin}>
                테스트 로그인
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
      <div>여기이하로 내용 추가 예정</div>
      <div className="landing_item_container">
        <div className="landing_item_literal">
          <div className="landing_item_literal_title">{showItem.title}</div>
          <div className="landing_item_literal_inform">{showItem.inform}</div>
        </div>
        <div className="landing_item_photo">
          <img src={showItem.photo} alt="" />
          <div className="landing_item_btns">
            <ArrowNarrowLeftIcon onClick={slideMinusBtn} />
            <ArrowNarrowRightIcon onClick={slidePlusBtn} />
          </div>
        </div>
      </div>
      <div>여기까지 추가 끝</div>
      {modalMessage ? (
        <div className="homeModal">
          <div className="homeModal_message">{modalMessage}</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Home;
