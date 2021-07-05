import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';
import { useSelector, useDispatch } from 'react-redux';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { Emoji } from 'emoji-mart';
import { getBudget } from '../actions';

function Budget() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { accessToken } = isLoggedInReducer.userLoggedIn;
  const getBudgetReducer = useSelector((state) => state.getBudgetReducer);
  const { loading, categories, usedGraph, budgetGraph } =
    getBudgetReducer.budget;
  const [budgetEmoji, setEmoji] = useState('');
  useEffect(() => {
    dispatch(getBudget(accessToken));
    console.log(categories);
  }, [dispatch, accessToken]);
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
          <div className="budget_chart">
            <div className="usedGraph">
              <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={usedGraph}
                options={{
                  title: '이번 달 지출 분포도',
                  slices: pieChartColor,
                  chartArea: { left: 20, top: 58, width: '65%', height: '75%' },
                  fontSize: 14,
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
            <div className="usedGraph">
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
                  chartArea: { left: 20, top: 58, width: '65%', height: '75%' },
                  fontSize: 14,
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
          {/* <Emoji emoji={budgetEmoji} set="twitter" size={64} />
          <Picker
            set="twitter"
            onClick={(emoji) => {
              setEmoji(emoji.id);
            }}
            title="Pick your emoji…"
            emoji="point_up"
            color="#385ad2"
          /> */}
          <div className="budget_category">
            <ul>
              {categories.map((item, i) => {
                return (
                  <li key={`categories-${i}`}>
                    <Emoji emoji="moyai" set="twitter" size={60} />
                    <span>{item.categoryname}</span>
                    <span>{item.categoryrest}</span>
                    <span>/{item.categorybudget}</span>
                    <span>￦</span>
                  </li>
                );
              })}
              <li>
                <button>+</button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default Budget;
