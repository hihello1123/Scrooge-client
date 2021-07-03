import React from 'react';
import { useSelector } from 'react-redux';
import DailyListItem from './DailyListItem';

function DailyList() {
  const dailyReducer = useSelector((state) => state.dailyReducer);
  const { bottom } = dailyReducer.daily;
  console.log(bottom);
  if (bottom.length === 0) return <>빈</>;
  return (
    <>
      <div className="top hr"></div>
      <div className="dailyList">
        <div className="dailyList_tag">
          <div className="">카테고리</div>
          <div className="">지출 금액</div>
          <div className="">메모</div>
          <div className="">날짜</div>
        </div>
        {bottom.map((item) => {
          return (
            <DailyListItem key={`dailyListItem-${item.moneyId}`} item={item} />
          );
        })}
      </div>
    </>
  );
}

export default DailyList;
