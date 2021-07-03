import React from 'react';
import { useSelector } from 'react-redux';
import DailyListItem from './DailyListItem';
import Dailyform from './Dailyform';

function DailyList() {
  const dailyReducer = useSelector((state) => state.dailyReducer);
  const { bottom } = dailyReducer.daily;
  console.log(bottom);
  if (bottom.length === 0) return <>빈</>;
  return (
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
      <Dailyform />
      {/* //TODO: 프롭으로 값넘겨주고 최상위 클래스에 .edit 넣기~~ */}
    </div>
  );
}

export default DailyList;
