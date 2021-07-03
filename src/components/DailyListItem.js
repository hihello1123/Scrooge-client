import React, { useRef, useState } from 'react';
import { DotsVerticalIcon } from '@heroicons/react/outline';
import Dailyform from './Dailyform';
function DailyListItem({ item }) {
  //TODO: 날짜 변환 2021-7-2 => new Date(2021,6,2)
  const { cost, date, emoji, memo } = item;

  const dailyEditMenu = useRef();
  const deleteWarnDropDown = useRef();

  const [edit, setEdit] = useState(false);

  const dailyEditBtnHandler = () => {
    dailyEditMenu.current.classList.toggle('show');
  };
  const dailyEditBtnHandlerBlur = () => {
    dailyEditMenu.current.classList.remove('show');
  };

  const editModeOnHandler = () => {
    setEdit(true);
  };

  const deleteDropDownHandler = () => {
    console.log('삭제버튼 열기');
    deleteWarnDropDown.current.classList.toggle('show');
  };

  return (
    <>
      {edit ? (
        <Dailyform editMode={true} item={item} />
      ) : (
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
              <li
                className="dailyList_item_dropdown_menu_item"
                onClick={editModeOnHandler}
              >
                수정
              </li>
              <li className="daily hr"></li>
              <li
                className="dailyList_item_dropdown_menu_item"
                onClick={deleteDropDownHandler}
              >
                삭제
              </li>
            </ul>
          </div>
          <div className="dailyItemWarn modal" ref={deleteWarnDropDown}>
            <h3>경고</h3>
            <div onClick={deleteDropDownHandler}>닫기</div>
            <p>
              해당 내역을 삭제하면
              <br />
              복구할 수 없습니다.
            </p>
            <button className="delete submit">영구 삭제</button>
          </div>
        </div>
      )}
    </>
  );
}

export default DailyListItem;
