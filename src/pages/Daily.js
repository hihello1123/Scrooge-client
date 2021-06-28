import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getDaily } from '../actions';

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
    <>
      <div className="daily_Top">
        <div className="daily_Top_Small">MonthlyBudget is : {}</div>
        <div className="daily_Top_Small"></div>
        <div className="daily_Top_Small"></div>
      </div>
      <div>bottom</div>
    </>
  );
}

export default Daily;
