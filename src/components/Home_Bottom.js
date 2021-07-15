import React, { useEffect, useState } from 'react';
import {
  ArrowNarrowLeftIcon,
  ArrowNarrowRightIcon,
} from '@heroicons/react/outline';

function Home_Bottom() {
  const [showItem, setItem] = useState({
    title: '지출 내역 작성',
    inform: [
      '버튼 세 개로 작성하는 놀라운 지출 내역.',
      '가계부계의 종결자 다운 Simple한 기능.',
    ],
    photo: process.env.PUBLIC_URL + '/first.gif',
    id: 0,
  });

  const ImgComponent = () => {
    return <img src={showItem.photo} alt="" />;
  };

  const TitleComponent = () => {
    return <div className="landing_item_literal_title">{showItem.title}</div>;
  };

  const InformComponent = () => {
    return (
      <div className="landing_item_literal_inform">
        <div className="landing_item_literal_inform_1">
          {showItem.inform[0]}
        </div>
        <div className="landing_item_literal_inform_2">
          {showItem.inform[1]}
        </div>
      </div>
    );
  };

  const slidePlusBtn = (e) => {
    if (showItem.id === 1) {
      setItem({ ...showItem, ...itemlist[0] });
    } else {
      let filtered = itemlist.filter((el) => {
        if (showItem.id === 1) {
          return el.id === 0;
        } else {
          return el.id === showItem.id + 1;
        }
      });
      setItem({ ...showItem, ...filtered[0] });
      console.log(filtered);
      console.log(showItem);
    }
  };

  const slideMinusBtn = (e) => {
    if (showItem.id === 0) {
      setItem({ ...showItem, ...itemlist[1] });
    } else {
      let filtered = itemlist.filter((el) => {
        if (showItem.id === 0) {
          return el.id === 1;
        } else {
          return el.id === showItem.id - 1;
        }
      });
      setItem({ ...showItem, ...filtered[0] });
    }
  };

  const itemlist = [
    {
      title: '지출 내역 작성',
      inform: [
        '버튼 세 개로 작성하는 놀라운 지출 내역.',
        '가계부 계의 종결자 다운 Simple한 기능.',
      ],
      photo: process.env.PUBLIC_URL + '/first.gif',
      id: 0,
    },
    {
      title: '예산 작성 / 수정 / 삭제',
      inform: ['내가 만든 목표.', '내가 만든 대로 만들어지는 정보.'],
      photo: process.env.PUBLIC_URL + '/second.gif',
      id: 1,
    },
  ];

  return (
    <>
      <h2>
        사용하기 쉬운
        <br />
        심플한 인터페이스
      </h2>
      <div id="landing_item_container" className="landing_item_container">
        <div className="landing_item_literal">
          <TitleComponent />
          <div className="top hr" />
          <InformComponent />
        </div>
        <div className="landing_item_photo">
          <div className="landing_item_photo_container">
            <ImgComponent />
          </div>
          <div className="landing_item_btns">
            <ArrowNarrowLeftIcon
              className="clickMinus"
              onClick={slideMinusBtn}
            />
            <ArrowNarrowRightIcon
              className="clickPlus"
              onClick={slidePlusBtn}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_Bottom;
