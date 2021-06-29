import React from 'react';
import { useSelector } from 'react-redux';

function Topper() {
  const dailyReducer = useSelector((state) => state.dailyReducer);
  const { top } = dailyReducer.daily;
  console.log(top);

  return (
    <div className="top">
      <div className="top_small top_small_1">
        <div className="top_inner_title">이번달 총 예산</div>
        <div className="top_cost">
          <span className="top_inner_cost">
            {top.monthlyBudget - top.monthlyUsed}
          </span>
          <span className="top_Won">/ {top.monthlyBudget}￦</span>
        </div>
      </div>
      <div className="top_small top_small_2">
        <div className="top_inner_title">이번 달 사용 금액</div>
        <div className="top_cost">
          <span className="top_inner_cost">{top.monthlyUsed}</span>
          <span className="top_Won"> ￦</span>
        </div>
      </div>
      <div className="top_small top_small_3">
        <div className="top_inner_title">이전 달 사용금액</div>
        <div className="top_cost">
          <span className="top_inner_cost">{top.exMonthlyUsed}</span>
          <span className="top_Won"> ￦</span>
        </div>
      </div>
    </div>
  );
}

export default Topper;
