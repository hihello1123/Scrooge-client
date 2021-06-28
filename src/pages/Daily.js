import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getDaily } from '../actions';
import Dailyform from '../components/Dailyform';

function Daily() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { isLoggedIn, accessToken } = isLoggedInReducer.userLoggedIn;
  useEffect(() => {
    axios
      .get('https://api.scrooge.today/daypage', {
        headers: {
          authorization: `bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        dispatch(getDaily(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="daily">
      <div className="top">
        <div className="top small">MonthlyBudget is : {}</div>
        <div className="top small"></div>
        <div className="top small"></div>
      </div>
      <div>
        <div className="daily_form">
          <Dailyform />
        </div>
      </div>
    </div>
  );
}

export default Daily;
