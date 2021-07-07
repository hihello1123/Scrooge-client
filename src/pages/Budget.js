import React, { useEffect, useState, useRef } from 'react';
import Chart from 'react-google-charts';
import { useSelector, useDispatch } from 'react-redux';
import { getBudget, createBudget, navEffect, GET_BUDGET } from '../actions';
import { PlusIcon, XIcon } from '@heroicons/react/outline';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { Emoji } from 'emoji-mart';
import BudgetList from '../components/BudgetList';

function Budget() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { accessToken } = isLoggedInReducer.userLoggedIn;
  const getBudgetReducer = useSelector((state) => state.getBudgetReducer);
  const { loading, categories, usedGraph, budgetGraph } =
    getBudgetReducer.budget;

  const randomEmoji = () => {
    const randomNum = Math.floor(Math.random() * 10);
    const emojiArr = [
      'pizza',
      'car',
      'taxi',
      'carrot',
      'grapes',
      'cry',
      'ghost',
      'see_no_evil',
      'pig2',
      'moyai',
    ];

    return emojiArr[randomNum];
  };
  const [budgetEmoji, setEmoji] = useState(randomEmoji);
  const [addMode, setAddMode] = useState(false);
  const [inputData, setInputData] = useState({
    categoryname: '',
    budget: '',
    emoji: budgetEmoji,
  });
  const emojiSelectHandler = (data) => {
    setEmoji(data);
    setInputData({
      ...inputData,
      emoji: data,
    });
  };

  useEffect(() => {
    dispatch(getBudget(accessToken));

    document.addEventListener('mousedown', handleClick, false);
    let url = new URL(window.location.href);
    dispatch(navEffect(url.pathname));
    return () => {
      document.removeEventListener('mousedown', handleClick, false);
      dispatch({ type: GET_BUDGET }); // 메모리 누수 방지
    };
  }, [dispatch, accessToken]);

  const emojiPicker = useRef();
  const emojiBtn = useRef();
  const emojiBoxHandler = () => {
    emojiPicker.current.classList.toggle('show');
  };
  const handleClick = (e) => {
    try {
      if (
        !emojiPicker.current.contains(e.target) &&
        !emojiBtn.current.contains(e.target)
      ) {
        emojiPicker.current.classList.remove('show');
      }
    } catch (error) {
      return null;
    }
  };

  const inputHandler = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const createBudgetBtnHandler = (e) => {
    e.preventDefault();
    if (!inputData.categoryname || !inputData.budget) return;
    dispatch(createBudget(inputData, accessToken));
  };

  const pieChartColor = {
    0: { color: '#1565C0' },
    1: { color: '#1976D2' },
    2: { color: '#1E88E5' },
    3: { color: '#2196F3' },
    4: { color: '#42A5F5' },
    5: { color: '#64B5F6' },
    6: { color: '#90CAF9' },
    7: { color: '#BBDEFB' },
    8: { color: '#E3F2FD' },
    9: { color: '#0D47A1' },
    10: { color: '#82B1FF' },
    11: { color: '#448AFF' },
    12: { color: '#2979FF' },
    13: { color: '#2962FF' },
    14: { color: '#E1F5FE' },
    15: { color: '#B3E5FC' },
    16: { color: '#81D4FA' },
    17: { color: '#4FC3F7' },
    18: { color: '#29B6F6' },
    19: { color: '#03A9F4' },
    20: { color: '#039BE5' },
    21: { color: '#0288D1' },
    22: { color: '#0277BD' },
    23: { color: '#01579B' },
    24: { color: '#80D8FF' },
    25: { color: '#40C4FF' },
    26: { color: '#00B0FF' },
    27: { color: '#0091EA' },
  };
  return (
    <>
      {loading ? (
        <>로딩중...</>
      ) : (
        <div className="budget container">
          <div className="budget_chart_group">
            <div className="budget_chart">
              <div className="budgit_chart_frame">
                <Chart
                  width={'500px'}
                  height={'300px'}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={usedGraph}
                  options={{
                    title: '이번 달 지출 분포도',
                    sliceVisibilityThreshold: 0,
                    slices: pieChartColor,
                    chartArea: {
                      left: 20,
                      top: 58,
                      width: '65%',
                      height: '75%',
                    },
                    fontSize: 12,
                    fontName: 'Noto Sans KR',
                    titleTextStyle: {
                      fontSize: 18,
                      fontName: 'Noto Sans KR',
                      bold: false,
                    },
                    tooltip: {
                      textStyle: {
                        fontSize: 14,
                        fontName: 'Noto Sans KR',
                      },
                    },
                  }}
                />
              </div>
            </div>
            <div className="budget_chart">
              <div className="budgit_chart_frame">
                <Chart
                  width={'500px'}
                  height={'300px'}
                  chartType="PieChart"
                  loader={<div>Loading Chart</div>}
                  data={budgetGraph}
                  options={{
                    title: '이번 달 예산 계획 분포도',
                    sliceVisibilityThreshold: 0,
                    slices: pieChartColor,
                    chartArea: {
                      left: 20,
                      top: 58,
                      width: '65%',
                      height: '75%',
                    },
                    fontSize: 12,
                    fontName: 'Noto Sans KR',
                    titleTextStyle: {
                      fontSize: 18,
                      fontName: 'Noto Sans KR',
                      bold: false,
                    },
                    tooltip: {
                      textStyle: {
                        fontSize: 14,
                        fontName: 'Noto Sans KR',
                      },
                    },
                  }}
                  rootProps={{ 'data-testid': '1' }}
                />
              </div>
            </div>
          </div>
          <div className="budget_category">
            <ul>
              {categories.map((item, i) => {
                return (
                  <BudgetList key={`categories-${i}`} item={item} index={i} />
                );
              })}
            </ul>
            {addMode ? (
              <>
                <div className="budget_category_edit">
                  <div className="emoji_box">
                    <button
                      className="emoji"
                      onClick={emojiBoxHandler}
                      ref={emojiBtn}
                    >
                      <Emoji emoji={budgetEmoji} set="twitter" size={42} />
                    </button>
                    <div className="emoji_picker" ref={emojiPicker}>
                      <Picker
                        set="twitter"
                        onClick={(emoji) => {
                          emojiSelectHandler(emoji.id);
                        }}
                        title="Pick your emoji…"
                        emoji="point_up"
                        color="#385ad2"
                        style={{
                          position: 'absolute',
                          top: '70px',
                          left: '0px',
                        }}
                      />
                    </div>
                  </div>
                  <form>
                    <label htmlFor="budgetName">예산 이름</label>
                    <input
                      type="text"
                      id="budgetName"
                      name="categoryname"
                      onChange={inputHandler}
                    />
                    <label htmlFor="budget">예산</label>
                    <input
                      type="text"
                      id="budget"
                      name="budget"
                      onChange={inputHandler}
                    />
                    <button className="submit" onClick={createBudgetBtnHandler}>
                      예산 생성
                    </button>
                  </form>
                  <button
                    className="budget_edit_mode_done"
                    onClick={() => {
                      setAddMode(!addMode);
                    }}
                  >
                    <XIcon />
                  </button>
                </div>
              </>
            ) : (
              <>
                <button
                  className="budget_edit_mode"
                  onClick={() => {
                    setAddMode(!addMode);
                  }}
                >
                  <PlusIcon className="plus_icon" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Budget;
