import React, { useEffect } from 'react';
import Topper from '../components/Topper';
import { useDispatch, useSelector } from 'react-redux';
import { yearlyList } from '../actions';
function Yearly() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { accessToken } = isLoggedInReducer.userLoggedIn;
  useEffect(() => {
    dispatch(yearlyList(accessToken));
  });
  return (
    <>
      <div className="yearly container">
        <Topper />
      </div>
    </>
  );
}

export default Yearly;
