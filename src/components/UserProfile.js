import React from 'react';
// import { useSelector } from 'react-redux';

function UserProfile() {
  //   const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  //   const { isLoggedIn, accessToken } = isLoggedInReducer.userLoggedIn;
  return (
    <div className="user_profile">
      <div className="user_profile_photo"></div>
      <div className="user_profile_info">
        <span className="user_profile_info_name">김솔희</span>
        <span className="user_profile_info_level">1</span>
        <progress className="user_profile_info_exp" value="0" max="100" />
      </div>
    </div>
  );
}

export default UserProfile;
