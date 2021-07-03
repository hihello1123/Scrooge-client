import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { postDaily } from '../actions';
import DatePicker from 'react-datepicker';
import { ko } from 'date-fns/esm/locale';
import { ChevronDownIcon } from '@heroicons/react/outline';
import 'react-datepicker/dist/react-datepicker.css';
import { useEffect } from 'react';

function Dailyform({ editMode, item }) {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const dailyReducer = useSelector((state) => state.dailyReducer);
  const { accessToken } = isLoggedInReducer.userLoggedIn;
  const { categoryList } = dailyReducer.daily;

  const dailyForm = useRef();
  const categoryMenu = useRef();
  const categoryBtn = useRef();
  const moneyInput = useRef();
  const memoInput = useRef();

  const [date, setDate] = useState(new Date()); // 날짜 선택
  const [inputData, setInputData] = useState({
    categoryname: '지정되지 않은 카테고리',
    cost: '',
    memo: '',
    date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
  });
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (editMode) {
      dailyForm.current.classList.add('editMode');
    }
    if (item) {
      categoryBtn.current.children[0].textContent = item.emoji || '카테고리';
      moneyInput.current.placeholder = item.cost;
      memoInput.current.placeholder = item.memo || '메모';

      const dateArr = item.date.split('-');
      setDate(
        new Date(Number(dateArr[0]), Number(dateArr[1]) - 1, Number(dateArr[2]))
      );
      setInputData({
        categoryname: item.emoji || '지정되지 않은 카테고리',
        cost: String(item.cost),
        memo: item.memo || '',
        date: item.date,
      });
    }
  }, [editMode, item]);

  const setDateHandler = (date) => {
    setDate(date);
    setInputData({
      ...inputData,
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    });
  };

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
    console.log(inputData);
    setErr(null);
  };

  const dailySubmitHandler = (e) => {
    e.preventDefault();
    const re = '^[0-9]+$';
    if (!inputData.cost || !inputData.cost.match(re)) {
      if (!inputData.cost.match(re)) {
        setErr('금액은 숫자만 입력해주세요');
      }
      if (!inputData.cost) {
        setErr('금액을 적어주세요');
      }
      return;
    } else if (inputData.cost === '0') {
      setErr('0원은 안돼요');
      return;
    }

    switch (e.target.textContent) {
      case '지출 내역 작성':
        dispatch(postDaily(inputData, accessToken));
        break;
      case '지출 내역 수정':
        break;
      default:
        return;
    }
  };

  return (
    <>
      <form className="daily_form" ref={dailyForm}>
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
                  return (
                    <li key={`categoryList-${el.id}`}>{el.categoryname}</li>
                  );
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
          name="memo"
          type="text"
          placeholder="메모"
          onChange={inputChangeHandler}
          ref={memoInput}
        />
        <DatePicker
          className="date_picker"
          selected={date}
          onChange={(date) => {
            setDateHandler(date);
          }}
          locale={ko}
          dateFormat="yyyy-MM-dd"
        />
        {err ? <div className="formErrMessage">{err}</div> : <></>}
        <button className="daily_form_submit" onClick={dailySubmitHandler}>
          {editMode ? '지출 내역 수정' : '지출 내역 작성'}
        </button>
      </form>
    </>
  );
}

export default Dailyform;
