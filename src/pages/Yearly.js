import React, { useEffect } from 'react';
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
    <div className="yearly container">
      <div className="yearly_top_container">상단라이브러리 예정</div>
      <div className="hr"></div>
      <div className="yearly_bottom">
        <div className="yearly_bottom_container">
          올해 성공한 약속
          <div className="yearly_bottom_container_inner_1">1등</div>
          <div className="yearly_bottom_container_inner_2">2등</div>
          <div className="yearly_bottom_container_inner_3">3등</div>
        </div>
        <div className="yearly_bottom_container">
          올해 가장 큰 지출
          <div className="yearly_bottom_container_inner_1">1등</div>
          <div className="yearly_bottom_container_inner_2">2등</div>
          <div className="yearly_bottom_container_inner_3">3등</div>
        </div>
        <div className="yearly_bottom_container">올해 업적</div>
      </div>
    </div>
  );
}

export default Yearly;
