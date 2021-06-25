import React from 'react';
import Logo from './Logo';
import { DocumentTextIcon } from '@heroicons/react/outline';

function App() {
  return (
    <div className="nav">
      <div className="nav_container">
        <Logo />
        {/*  // TODO: 유저프로필 */}
        <ul>
          <li className="focused">
            <DocumentTextIcon className="nav_icon " />일 별 차트
          </li>
          <li>
            <DocumentTextIcon className="nav_icon " />일 별 차트
          </li>
          <li>
            <DocumentTextIcon className="nav_icon " />일 별 차트
          </li>
          <li>
            <DocumentTextIcon className="nav_icon " />일 별 차트
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
