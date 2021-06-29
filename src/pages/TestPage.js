import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Chart from "react-google-charts";

//daypage,budget,initialize,getmonthlydata,getyearlydata
function Testing() {
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { accessToken } = isLoggedInReducer.userLoggedIn;
  axios
    .get(`${process.env.REACT_APP_API_URL}` + '/daypage', {
      headers: { authorization: `bearer ${accessToken}` },
      withCredentials: true,
    })
    .then((res) => {
      console.log('daypage is');
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log('daypage error is');
      console.log(err.response);
    });
  axios
    .get(`${process.env.REACT_APP_API_URL}` + '/budget', {
      headers: { authorization: `bearer ${accessToken}` },
      withCredentials: true,
    })
    .then((res) => {
      console.log('budget is');
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log('budget error is');
      console.log(err.response);
    });
  axios
    .get(`${process.env.REACT_APP_API_URL}` + '/initialize', {
      headers: { authorization: `bearer ${accessToken}` },
      withCredentials: true,
    })
    .then((res) => {
      console.log('initialize is');
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log('initialize error is');
      console.log(err.response);
    });
  return (<>
    <Chart
      width={1000}
      height={350}
      chartType="Calendar"
      loader={<div>Loading Chart</div>}
      data={[
        [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
        [new Date(2021, 8, 12), 100000],
      ]}
      options={{
        title: '달성 스크루지 데이',
        calendar: {
          cellColor: {
            stroke: '#76a7fa',
            strokeOpacity: 0.5,
            strokeWidth: 1,
          }
        }
      }}
      rootProps={{ 'data-testid': '1' }}
    />
  </>)
}

export default Testing;
