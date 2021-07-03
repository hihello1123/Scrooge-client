import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postDaily } from '../actions';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { ChevronDownIcon } from '@heroicons/react/outline';
import 'react-datepicker/dist/react-datepicker.css';

function Dailyform() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { accessToken } = isLoggedInReducer.userLoggedIn;

  const categoryMenu = useRef();
  const categoryBtn = useRef();
  const moneyInput = useRef();

  const [date, setDate] = useState(new Date()); // 날짜 선택
  const [inputData, setInputData] = useState({
    categoryname: '지정되지 않은 카테고리',
    cost: '',
    memo: '',
    date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
  });
  const [err, setErr] = useState(null);

  const dailyReducer = useSelector((state) => state.dailyReducer);
  const { categoryList } = dailyReducer.daily;

  const categoryDropdownHandler = () => {
    categoryMenu.current.classList.toggle('show');
  };

  const categoryMenuHandler = (e) => {
    if (e.target.textContent !== '카테고리 없음') {
      categoryBtn.current.children[0].textContent = e.target.textContent;
      setInputData({
        ...inputData,
        categoryname: e.target.textContent,
      });
    }
    categoryMenu.current.classList.remove('show');
  };

  const moneyBtnHandler = (e) => {
    const re = '^[0-9]+$';
    let money;
    if (!moneyInput.current.value) {
      moneyInput.current.value = '0';
    }
    money = Number(moneyInput.current.value);

    switch (e.target.textContent) {
      case '+10,000':
        money += 10000;
        setInputData({
          ...inputData,
          cost: String(Number(inputData.cost) + 10000),
        });
        break;
      case '+1,000':
        money += 1000;
        setInputData({
          ...inputData,
          cost: String(Number(inputData.cost) + 1000),
        });
        break;
      case '+100':
        money += 100;
        setInputData({
          ...inputData,
          cost: String(Number(inputData.cost) + 100),
        });
        break;
      default:
        break;
    }
    moneyInput.current.value = money;
  };

  const inputChangeHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
    setErr(null);
  };

  const dailySubmitHandler = (e) => {
    e.preventDefault();
    const re = '^[0-9]+$';
    if (!inputData.cost || !inputData.cost.match(re)) {
      if (!inputData.cost) {
        setErr('금액을 적어주세요');
      }
      if (!inputData.cost.match(re)) {
        setErr('금액은 숫자만 입력해주세요');
      }
      return;
    }
    dispatch(postDaily(inputData, accessToken));
  };

  return (
    <>
      <form className="daily_form">
        <div className="category_dropdown">
          <button
            type="button"
            className="category_toggle_btn"
            onClick={categoryDropdownHandler}
            ref={categoryBtn}
          >
            <p>카테고리</p>
            <ChevronDownIcon className="category_toggle_btn_icon" />
          </button>
          <ul
            className="category_menu"
            onClick={categoryMenuHandler}
            ref={categoryMenu}
          >
            {categoryList ? (
              <>
                {categoryList.map((el) => {
                  <li key={`categoryList-${el.id}`}>{el.categoryname}</li>;
                })}
              </>
            ) : (
              <>
                <li className="disabled">카테고리 없음</li>
              </>
            )}
          </ul>
        </div>
        <div className="money">
          <input
            className="money_input"
            name="cost"
            type="text"
            ref={moneyInput}
            onChange={inputChangeHandler}
          />
          <label className="money_label" htmlFor="money">
            ￦
          </label>
          <div className="money_btn_group">
            <button
              type="button"
              className="money_btn"
              onClick={moneyBtnHandler}
            >
              +10,000
            </button>
            <button
              type="button"
              className="money_btn"
              onClick={moneyBtnHandler}
            >
              +1,000
            </button>
            <button
              type="button"
              className="money_btn"
              onClick={moneyBtnHandler}
            >
              +100
            </button>
          </div>
        </div>
        <input
          className="memo"
          type="text"
          placeholder="메모"
          onChange={inputChangeHandler}
        />
        <DatePicker
          className="date_picker"
          selected={date}
          onChange={(date) => setDate(date)}
          locale={ko}
          dateFormat="yyyy-MM-dd"
        />
        {err ? <div className="formErrMessage">{err}</div> : <></>}
        <button className="daily_form_submit" onClick={dailySubmitHandler}>
          지출 내역 작성
        </button>
      </form>
      <div className="top hr"></div>
    </>
  );
}

export default Dailyform;
