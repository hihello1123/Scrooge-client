import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import {
  DocumentTextIcon,
  LogoutIcon,
  MenuIcon,
  XIcon,
} from '@heroicons/react/outline';
import { CogIcon } from '@heroicons/react/solid';
import UserProfile from './UserProfile';

function App() {
  const nav = useRef();
  const navOpenHandler = () => {
    nav.current.classList.add('show');
  };
  const navCloseHandler = () => {
    nav.current.classList.remove('show');
  };

  return (
    <>
      <nav className="nav" ref={nav}>
        <div className="nav_container">
          <Logo />
          <button className="nav_toggle_btn X_btn" onClick={navCloseHandler}>
            <XIcon />
          </button>
          <UserProfile />
          <ul className="nav_container_ul">
            <li className="focused">
              <Link>
                <DocumentTextIcon className="nav_icon " />일 별 차트
              </Link>
            </li>
            <li>
              <Link>
                <DocumentTextIcon className="nav_icon " />일 별 차트
              </Link>
            </li>
            <li>
              <Link>
                <DocumentTextIcon className="nav_icon " />일 별 차트
              </Link>
            </li>
            <li>
              <Link>
                <DocumentTextIcon className="nav_icon " />일 별 차트
              </Link>
            </li>
          </ul>
          <footer className="nav_footer">
            <button className="nav_footer_btn">
              <LogoutIcon className="nav_icon" />
              로그아웃
            </button>
            <button calssName="nav_footer_btn">
              <CogIcon className="nav_icon_cog" />
            </button>
          </footer>
        </div>
      </nav>
      <button className="nav_toggle" onClick={navOpenHandler}>
        <MenuIcon className="nav_toggle_btn" />
      </button>
    </>
  );
}

export default App;
