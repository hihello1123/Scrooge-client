import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { useSelector } from 'react-redux';
import { ChevronDownIcon } from '@heroicons/react/outline';

import 'react-datepicker/dist/react-datepicker.css';

function Dailyform() {
  //   const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  //   const { isLoggedIn, accessToken } = isLoggedInReducer.userLoggedIn;

  const categoryMenu = useRef();
  const categoryBtn = useRef();

  const dailyReducer = useSelector((state) => state.dailyReducer);
  const {categoryList} = dailyReducer.daily;

  const categoryDropdownHandler = () => {
    categoryMenu.current.classList.toggle('show')
  }
  
  const categoryDropdownBlurHandler = (e) => {
    categoryMenu.current.classList.remove('show')
  }
  
  const categoryMenuHandler = (e) => {
    categoryBtn.current.children[0].textContent = e.target.textContent
  }

  const moneyBtnHandler = (e) => {
    let money = e.target.parentNode.children[0].value || '0';
    money = Number(money);
    switch (e.target.textContent) {
      case '+10,000':
        money += 10000;
        console.log('만원 추가');
        break;
      case '+1,000':
        money += 1000;
        console.log('천원 추가');
        break;
      case '+100':
        money += 100;
        console.log('백원 추가');
        break;
    }
    e.target.parentNode.children[0].value = money;
  };
  const [date, setDate] = useState(new Date()); // 날짜 선택

  return (
    <>
      <form className="daily_form">
        <div className="category_dropdown">
          <button type="button" className="category_toggle_btn" onClick={categoryDropdownHandler} onBlur={categoryDropdownBlurHandler} ref={categoryBtn}>
            <p>카테고리</p>
          <ChevronDownIcon className="category_toggle_btn_icon" />
          </button>
          <ul className="category_menu" onClick={categoryMenuHandler} ref={categoryMenu}>
            {categoryList ? (<>
            </>) : (<>
            <li className="category_item">
              카테고리 없음
            </li>
            <li className="category_item">
              2
            </li>
            <li className="category_item">
              3
            </li>
            </>)}
          </ul>
        </div>
        <div className="money">
          <input className="money" name="money" type="text" />
          <label htmlFor="money">￦</label>
          <div>
            <button type="button" className="money_btn" onClick={moneyBtnHandler}>
              +10,000
            </button>
            <button type="button" className="money_btn" onClick={moneyBtnHandler}>
              +1,000
            </button>
            <button type="button" className="money_btn" onClick={moneyBtnHandler}>
              +100
            </button>
          </div>
        </div>
        <input className="memo" type="text" placeholder="메모" />
        <DatePicker
          className="date_picker"
          selected={date}
          onChange={(date) => setDate(date)}
          locale={ko}
          dateFormat="yyyy-MM-dd"
        />
      </form>
    </>
  );
}

export default Dailyform;
