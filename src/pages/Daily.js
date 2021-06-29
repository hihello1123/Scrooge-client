import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getDaily } from '../actions';
import Dailyform from '../components/Dailyform';

function Daily() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { accessToken } = isLoggedInReducer.userLoggedIn;
  const dailyReducer = useSelector((state) => state.dailyReducer);
  const { top, bottom } = dailyReducer.daily;

  useEffect(() => {
    axios
      .get('https://api.scrooge.today/daypage', {
        headers: {
          authorization: `bearer ${accessToken}`,
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        dispatch(getDaily(res.data.data));
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div className="daily">
      <div className="top">
        <div className="top small">
          MonthlyBudget is : {console.log(dailyReducer)}
        </div>
        <div className="top small">MonthlyUsed is : {}</div>
        <div className="top small">ExMonthlyUsed is : {}</div>
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
