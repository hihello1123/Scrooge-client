import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Logo from './Logo';
import {
  DocumentTextIcon,
  LogoutIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import { CogIcon } from '@heroicons/react/solid';
import UserProfile from './UserProfile';
import { getUserInfo, userLogOut } from '../actions';

function Nav() {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { accessToken } = isLoggedInReducer.userLoggedIn;

  useEffect(() => {
    dispatch(getUserInfo(accessToken, history));
  }, [accessToken, history, dispatch]);

  const nav = useRef();
  const navOpenHandler = () => {
    nav.current.classList.add('show');
  };
  const navCloseHandler = () => {
    nav.current.classList.remove('show');
  };

  const signOutHandler = () => {
    dispatch(userLogOut(accessToken, history));
  };

  return (
    <>
      <nav className="nav" ref={nav}>
        <div className="nav_container">
          <Logo />
          <button className="nav_toggle_X_btn" onClick={navCloseHandler}>
            <XIcon />
          </button>
          <UserProfile />
          <ul className="nav_container_ul">
            <li className="focused">
              <Link to="/daily">
                <DocumentTextIcon className="nav_icon " />
                지출 리스트
              </Link>
            </li>
            <li>
              <Link to="/test">
                <DocumentTextIcon className="nav_icon " />
                테스트
              </Link>
            </li>
            <li>
              <DocumentTextIcon className="nav_icon " />일 별 차트
            </li>
            <li>
              <Link to="/">
                <DocumentTextIcon className="nav_icon " />일 별 차트
              </Link>
            </li>
          </ul>
          <footer className="nav_footer">
            <button className="nav_footer_btn" onClick={signOutHandler}>
              <LogoutIcon className="nav_icon" />
              로그아웃
            </button>
            <Link to="/setting">
              <button className="nav_footer_btn">
                <CogIcon className="nav_icon_cog" />
              </button>
            </Link>
          </footer>
        </div>
      </nav>
      <button className="nav_toggle" onClick={navOpenHandler}>
        <MenuIcon className="nav_toggle_btn" />
      </button>
    </>
  );
}

export default Nav;
