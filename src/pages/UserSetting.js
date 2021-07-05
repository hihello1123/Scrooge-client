import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userEdit } from '../actions';

function UserSetting() {
  const dispatch = useDispatch();

  const userInfoReducer = useSelector((state) => state.userInfoReducer);
  const { userName, userPhoto, userEmail } = userInfoReducer.userInfo;
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { accessToken, path } = isLoggedInReducer.userLoggedIn;

  const [tempInfo, setTempInfo] = useState({
    username: userName,
    photo: undefined,
    password: undefined,
    passwordCheck: undefined,
  });

  function inputHandler(e) {
    console.log(tempInfo);
    setTempInfo({ ...tempInfo, [e.target.name]: e.target.value });
  }

  function inputPhoto(e) {
    console.log(tempInfo);
    let file = e.target.files[0];
    console.log(file);
    setTempInfo({
      ...tempInfo,
      photo: file,
    });
  }

  let editInfoRequestHandler = async (e) => {
    if (!path) {
      if (!tempInfo.password || !tempInfo.passwordCheck) {
        alert('비밀번호를 입력해주세요');
      } else if (tempInfo.password !== tempInfo.passwordCheck) {
        alert('비밀번호를 확인해주세요');
      }
    }
    e.preventDefault();

    const fd = new FormData();
    if (tempInfo.photo) {
      fd.append('username', tempInfo.username);
      fd.append('photo', tempInfo.photo);
      fd.append('password', tempInfo.password);
    } else {
      fd.append('username', tempInfo.username);
      fd.append('password', tempInfo.password);
    }
    dispatch(userEdit(fd, accessToken));
  };

  return (
    <div className="container">
      <label>프로필 편집</label>
      <div className="container_edit">
        <div className="inputZone">
          <form className="signup_form">
            <img src={userPhoto} alt=""></img>
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
              placeholder={userName}
            ></input>
            <label htmlFor="email">이메일</label>
            <div className="signup_input">{userEmail}</div>
            {!path ? (
              <>
                <label htmlFor="password">비밀번호</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={inputHandler}
                  className="password signup_input"
                  required
                />
                <label htmlFor="passwordCheck">비밀번호 확인</label>
                <input
                  id="passwordCheck"
                  name="passwordCheck"
                  type="password"
                  onChange={inputHandler}
                  className="passwordCheck signup_input"
                  required
                />
              </>
            ) : (
              <></>
            )}
            <button
              className="signup_submit submit"
              onClick={editInfoRequestHandler}
            >
              회원정보 수정
            </button>
          </form>
        </div>
      </div>
      <label>설정</label>
      <div className="container_bottom">
        <div className="container_bottom_items">
          <div>다크모드</div>
          <div>버튼만들기</div>
        </div>
        <div className="container_bottom_items">
          <div>데이터삭제</div>
        </div>
        <div className="container_bottom_items">
          <div>메인페이지설정</div>
        </div>
        <div className="container_bottom_items">
          <div>엑셀 파일로 내보내기</div>
          <div> - 2레벨부터 사용가능</div>
        </div>
        <div className="container_bottom_items">
          <div>테마 설정</div>
          <div> - 2레벨부터 사용가능</div>
        </div>
        <div className="container_bottom_items">
          <div>주기 설정</div>
          <div> - 2레벨부터 사용가능</div>
        </div>
        <div className="container_bottom_items">
          <div>회원 탈퇴</div>
        </div>
      </div>
    </div>
  );
}

export default UserSetting;
