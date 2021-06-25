import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="center_desktop">
      <Link to="/signup">회원가입</Link>
    </div>
  );
}

export default Home;
