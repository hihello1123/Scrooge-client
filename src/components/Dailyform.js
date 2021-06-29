import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
// import { useSelector } from 'react-redux';
// import { CashIcon } from '@heroicons/react/outline';

import 'react-datepicker/dist/react-datepicker.css';

function Dailyform() {
  //   const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  //   const { isLoggedIn, accessToken } = isLoggedInReducer.userLoggedIn;

  const moneyBtnHandler = (e) => {
    let money = e.target.parentNode.children[0].value || '0';
    money = Number(money);

    console.log(typeof money);
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
          <button type="button" className="category_toggle_btn">
            카테고리
          </button>
          <ul className="category_menu">
            {/*// TODO: 받아온 카테고리 맵~~ */}
            <li className="category_item">
              <button type="button">1</button>
            </li>
            <li className="category_item">
              <button type="button">2</button>
            </li>
            <li className="category_item">
              <button type="button">3</button>
            </li>
          </ul>
        </div>
        <div className="money">
          <input name="money" type="text" />
          <label htmlFor="money">￦{/* <CashIcon /> */}</label>
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
        <input type="text" placeholder="메모" />
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