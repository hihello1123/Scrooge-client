import React from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

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
  /*
  axios
    .get(`${process.env.REACT_APP_API_URL}` + '/getmonthlydata', {
      headers: { authorization: `bearer ${accessToken}` },
      withCredentials: true,
    })
    .then((res) => {
      console.log('getmonthlydata is');
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log('getmonthlydata error is');
      console.log(err.response);
    });
  axios
    .get(`${process.env.REACT_APP_API_URL}` + '/getyearlydata', {
      headers: { authorization: `bearer ${accessToken}` },
      withCredentials: true,
    })
    .then((res) => {
      console.log('getyearlydata is');
      console.log(res.data.data);
    })
    .catch((err) => {
      console.log('getyearlydata error is');
      console.log(err.response);
    });
    */
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
  return <></>;
}

export default Testing;
