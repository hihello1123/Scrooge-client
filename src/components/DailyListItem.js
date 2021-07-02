import React, { useRef } from 'react';
import { DotsVerticalIcon } from '@heroicons/react/outline';
function DailyListItem({ item }) {
  //TODO: 날짜 변환 2021-7-2 => new Date(2021,6,2)
  const { cost, date, emoji, memo, id: categoryId } = item;

  const dailyEditMenu = useRef();
  const dailyEditBtnHandler = () => {
    dailyEditMenu.current.classList.toggle('show');
  };
  const dailyEditBtnHandlerBlur = () => {
    dailyEditMenu.current.classList.remove('show');
  };
  return (
    <div className="dailyList_item">
      <div className="">{emoji}</div>
      <div className="">{cost}</div>
      <div className="">{memo}</div>
      <div className="">{date}</div>
      <div className="dailyList_item_dropdown">
        <button
          className="dailyList_icon_btn"
          onClick={dailyEditBtnHandler}
          onBlur={dailyEditBtnHandlerBlur}
        >
          <DotsVerticalIcon className="dailyList_icon" />
        </button>
        <ul className="dailyList_item_dropdown_menu" ref={dailyEditMenu}>
          <li className="dailyList_item_dropdown_menu_item">수정</li>
          <li className="daily hr"></li>
          <li className="dailyList_item_dropdown_menu_item">삭제</li>
        </ul>
      </div>
    </div>
  );
}

export default DailyListItem;
