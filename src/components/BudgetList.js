import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { Emoji } from 'emoji-mart';
import { XIcon } from '@heroicons/react/outline';

function BudgetList({ item, index }) {
  const [editMode, setEditMode] = useState(false);
  const [budgetEmoji, setEmoji] = useState(`${item.categoryemoji}`);
  const [inputData, setInputData] = useState({
    categoryname: item.categoryname,
    budget: item.categorybudget,
    emoji: budgetEmoji,
  });
  const emojiPicker = useRef();
  const emojiBtn = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClick, false);

    if (item.categoryrest) {
    }

    return () => {
      document.removeEventListener('mousedown', handleClick, false);
    };
  }, []);

  const emojiBoxHandler = () => {
    emojiPicker.current.classList.toggle('show');
  };

  const emojiSelectHandler = (data) => {
    setEmoji(data);
    setInputData({
      ...inputData,
      emoji: data,
    });
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

  const editBudgetBtnHandler = () => {
    // 리듀서
  };
  return (
    <>
      {editMode ? (
        <>
          <div className="budget_category_edit mb">
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
                    'z-index': '1',
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
                placeholder={item.categoryname}
              />
              <label htmlFor="budget">예산</label>
              <input
                type="text"
                id="budget"
                name="budget"
                onChange={inputHandler}
                placeholder={item.categorybudget}
              />
              <button className="submit" onClick={editBudgetBtnHandler}>
                예산 편집
              </button>
            </form>
            <button
              className="budget_edit_mode_done"
              onClick={() => {
                setEditMode(!editMode);
              }}
            >
              <XIcon />
            </button>
          </div>
        </>
      ) : (
        <li className="budget_category_li">
          <Emoji emoji={item.categoryemoji} set="twitter" size={36} />
          <span>{item.categoryname}</span>
          <span>{item.categoryrest}</span>
          <span>/{item.categorybudget}￦</span>
          {index !== 0 ? (
            <div className="hover">
              <button
                onClick={() => {
                  setEditMode(!editMode);
                }}
              >
                수정
              </button>
              <button className="budget_edit_mode_delete">삭제</button>
            </div>
          ) : (
            <></>
          )}
        </li>
      )}
    </>
  );
}

export default BudgetList;
