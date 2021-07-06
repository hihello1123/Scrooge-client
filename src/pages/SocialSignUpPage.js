import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { socialData, socialSignUp } from '../actions';

function SocialSignUpPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const socialDataReducer = useSelector((state) => state.socialDataReducer);
  const socialDatas = socialDataReducer.socialData;

  function inputHandler(e) {
    dispatch(socialData({ ...socialDatas, username: e.target.value }));
  }

  function inputPhoto(e) {
    let file = e.target.files[0];
    dispatch(
      socialData({
        ...socialDatas,
        photo: file,
      })
    );
  }

  let socialsignupRequestHandler = async (e) => {
    if (!socialDatas.username || !socialDatas.photo || !socialDatas.email) {
      //TODO: UX
      if (!socialDatas.username) {
        alert('닉네임을 입력해주세요');
      }
      if (!socialDatas.photo) {
        alert('사진을 첨부해주세요');
      }
      if (!socialDatas.email) {
        alert('처음부터 진행해주세요');
      }
      return;
    }
    e.preventDefault();

    const fd = new FormData();
    fd.append('email', socialDatas.email);
    fd.append('username', socialDatas.username);
    fd.append('photo', socialDatas.photo);

    dispatch(socialSignUp(fd, history));
  };

  return (
    <>
      <form className="signup_form">
        <label htmlFor="photo">사진</label>
        <input
          id="photo"
          name="photo"
          type="file"
          accept="image/jpg, image/png, image/jpeg, image/gif"
          onChange={inputPhoto}
          className="photo"
          required
        />
        <label htmlFor="username">닉네임</label>
        <input
          id="username"
          name="username"
          type="username"
          onChange={inputHandler}
          className="username signup_input"
          required
        ></input>
        <button
          className="signup_submit submit"
          onClick={socialsignupRequestHandler}
        >
          회원가입
        </button>
      </form>
    </>
  );
}

export default SocialSignUpPage;
