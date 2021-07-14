import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Daily from './Daily';
import Login from '../components/Login';
import Loading from '../components/Loading';
import {
  getGoogleCode,
  getKakaoCode,
  hello,
  socialDataDelete,
} from '../actions';
import { ArrowDownIcon, LockClosedIcon } from '@heroicons/react/outline';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const helloReducer = useSelector((state) => state.helloReducer);
  const { isLoggedIn } = isLoggedInReducer.userLoggedIn;
  const { loading, data } = helloReducer.hello;

  const [isModal, setModal] = useState(false);

  useEffect(() => {
    dispatch(hello());
  }, []);

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

  //스크롤 이펙트
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // 페이드인
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Daily />
        </>
      ) : (
        <>
          {loading ? (
            <>
              <Loading />
            </>
          ) : (
            <div className="home">
              {isModal ? <Login modalSet={modalSet} /> : <></>}
              <nav className="top_nav">
                <div></div>
                <div>
                  <img src={process.env.PUBLIC_URL + '/logoXS.png'} alt="" />
                </div>
                <div className="btn_group">
                  <button className="signin_btn" onClick={modalSet}>
                    <LockClosedIcon className="signin_btn_icon" />
                    로그인
                  </button>
                  <Link to="/signup">
                    <button className="signup_btn">가계부 쓰기</button>
                  </Link>
                </div>
              </nav>

              <div
                className="bg"
                style={{ transform: `translateY(${offsetY * 0.5}px)` }}
              >
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
              <section className="home_main">
                <div className="home_main_article">
                  <h1>
                    <strong>효율적</strong>인 <br />
                    <strong>지출습관</strong>을 <br />
                    만들어주는 <strong>스크루지</strong>
                  </h1>
                  <div className="btn_group">
                    <button className="signup_btn">가계부 쓰기</button>
                    <a href="#homeweb" className="scroll_btn">
                      기능 더보기
                      <ArrowDownIcon className="scroll_btn_icon" />
                    </a>
                  </div>
                </div>
                <div className="home_main_img">
                  <img src={data.notebook} alt="스크루지 맥북" />
                </div>
              </section>
              <section id="homeweb" className="home_web">
                <h2 data-aos="fade-up" data-aos-once="true">
                  나에게 맞는 가계부는?
                </h2>
                <div className="home_web_img">
                  <img
                    data-aos="fade-up"
                    src={data.ChromeBrower}
                    className="web"
                    alt=""
                  />
                  <div className="home_web_img_in">
                    <img
                      data-aos="fade-up"
                      src={data.Monthly}
                      className="monthly"
                      alt=""
                    />
                    <img
                      data-aos="fade-up"
                      src={data.Daily}
                      className="daily"
                      alt=""
                    />
                  </div>
                </div>
              </section>
              <div className="topper_container">
                <img
                  data-aos="fade-up-left"
                  src={data.Topper}
                  className="topper"
                  alt=""
                />
              </div>
              <section className="home_simpleUI">
                <h2 data-aos="fade-up">
                  사용하기 쉬운
                  <br />
                  심플한 인터페이스
                </h2>
                <div className="home_simpleUI_container">
                  <div data-aos="fade-up">
                    <img src={data.DailyPage} alt="" />
                    <sapn>
                      <h3>일 별 페이지</h3>
                      <p>
                        데스크탑, 태블릿, 모바일 환경 어디든지 <br />
                        사용내역을 간단하게 작성, 수정, 확인까지
                      </p>
                    </sapn>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="411"
                      height="211"
                      viewBox="0 0 411 211"
                      fill="none"
                    >
                      <path
                        className="path"
                        d="M2 2C37.6667 64 164.2 189.3 385 194.5"
                        stroke="#AFBFD6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="11 11"
                      />
                      <path
                        d="M390 180L407 194L390 208"
                        stroke="#AFBFD6"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div data-aos="fade-up">
                    <img src={data.MonthlyPage} alt="" />
                    <sapn>
                      <h3>월 별 페이지</h3>
                      <p>
                        매일 사용한 금액을 한눈에 <br />
                        이번 달 예산과 지출을 한번에
                      </p>
                    </sapn>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="409"
                      height="209"
                      viewBox="0 0 409 209"
                      fill="none"
                    >
                      <path
                        className="path"
                        d="M403.978 3C368.965 62.9855 243.758 184.81 23.026 192.226"
                        stroke="#AFBFD6"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeDasharray="11 11"
                      />
                      <path
                        d="M21 178L4 192L21 206"
                        stroke="#AFBFD6"
                        strokeWidth="5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div data-aos="fade-up">
                    <img src={data.YearlyPage} alt="" />
                    <sapn>
                      <h3>연도 별 페이지</h3>
                      <p>
                        올해 지출 횟수를 차트로
                        <br />
                        나와의 약속과 각종 업적을 재미있게
                      </p>
                    </sapn>
                  </div>
                </div>
              </section>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default Home;
