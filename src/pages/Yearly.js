import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { yearlyList, navEffect } from '../actions';
import YearlyList from '../components/YearlyList';
import Chart from 'react-google-charts';

function Yearly() {
  const dispatch = useDispatch();
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { accessToken } = isLoggedInReducer.userLoggedIn;

  const yearlyReducer = useSelector((state) => state.yearlyReducer);
  const { top } = yearlyReducer.yearlyData;

  useEffect(() => {
    dispatch(yearlyList(accessToken));
    let url = new URL(window.location.href);
    dispatch(navEffect(url.pathname));
  }, [dispatch]);

  function scale(min, max) {
    var cellSize = window.innerWidth / 60;
    if (cellSize > max) return max;
    if (cellSize < min) return min;
    return cellSize;
  }

  let test = [
    [
      { type: 'date', id: 'Date' },
      { type: 'number', id: 'Won/Loss' },
    ],
  ];

  function testing(num) {
    for (let n = 0; n < num; n++) {
      test.push([new Date(2021, 7, num), 0]);
    }
  }

  testing(5);

  console.log(test);

  return (
    <div className="container yearly_top_container">
      <div className="activeChart">
        <Chart
          chartType="Calendar"
          loader={<div>Loading Chart</div>}
          data={test}
          options={{
            title: '달성 스크루지 데이',
            calendar: {
              cellSize: scale(5, 16),
              cellColor: {
                stroke: '#76a7fa',
                strokeOpacity: 0.5,
                strokeWidth: 1,
              },
            },
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      </div>
      <div className="top hr"></div>
      <YearlyList />
    </div>
  );
}

export default Yearly;
