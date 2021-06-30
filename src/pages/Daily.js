import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getDaily } from '../actions';
import Dailyform from '../components/Dailyform';
import Topper from '../components/Topper';

function Daily() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { accessToken } = isLoggedInReducer.userLoggedIn;

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/daypage`, {
  //       headers: {
  //         authorization: `bearer ${accessToken}`,
  //       },
  //       withCredentials: true,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       dispatch(getDaily(res.data.data));
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // }, [accessToken, dispatch]);

  return (
    <div className="daily">
      <Topper />
      <div>
        <div className="daily_form">
          <Dailyform />
        </div>
      </div>
    </div>
  );
}

export default Daily;
