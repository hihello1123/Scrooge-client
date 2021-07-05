import React from 'react';
import { useSelector } from 'react-redux';

function YearlyList() {
  const yearlyReducer = useSelector((state) => state.yearlyReducer);
  const { best, topthree, achivement } = yearlyReducer.yearlyData.bottom;

  function succeedPromise(result) {
    if (result) {
      return `${result.date.split('-')[1]}월 ${result.categoryname} ${
        result.cost
      }원`;
    } else {
      return '지출을 입력해주세요';
    }
  }

  function mostCost(result) {
    if (result) {
      return (
        <>
          <div>
            {result.date.split('-')[1]}월 {result.date.split('-')[2]}일
          </div>
          <div>
            {result.memo} {result.cost}원
          </div>
        </>
      );
    } else {
      return '지출을 입력해주세요';
    }
  }

  return (
    <div className="yearly_bottom">
      <div className="yearly_bottom_container">
        <div className="yearly_bottom_title">올해 성공한 약속</div>
        <div className="yearly_bottom_container_inner_1">
          <div className="yearly_bottom_rank">1등</div>
          <div className="yearly_bottom_result">{succeedPromise(best[0])}</div>
        </div>
        <div className="yearly_bottom_container_inner_2">
          <div className="yearly_bottom_rank">2등</div>
          <div className="yearly_bottom_result">{succeedPromise(best[1])}</div>
        </div>
        <div className="yearly_bottom_container_inner_3">
          <div className="yearly_bottom_rank">3등</div>
          <div className="yearly_bottom_result">{succeedPromise(best[2])}</div>
        </div>
      </div>
      <div className="yearly_bottom_container">
        <div className="yearly_bottom_title">올해 가장 큰 지출</div>
        <div className="yearly_bottom_container_inner_1">
          <div className="yearly_bottom_rank">1등</div>
          <div className="yearly_bottom_result">{mostCost(topthree[0])}</div>
        </div>
        <div className="yearly_bottom_container_inner_2">
          <div className="yearly_bottom_rank">2등</div>
          <div className="yearly_bottom_result">{mostCost(topthree[1])}</div>
        </div>
        <div className="yearly_bottom_container_inner_3">
          <div className="yearly_bottom_rank">3등</div>
          <div className="yearly_bottom_result">{mostCost(topthree[2])}</div>
        </div>
      </div>
      <div className="yearly_bottom_container">
        <div className="yearly_bottom_title">올해 업적</div>
      </div>
    </div>
  );
}

export default YearlyList;
