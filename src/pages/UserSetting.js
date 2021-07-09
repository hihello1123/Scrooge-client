import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userEdit, importExcel } from '../actions';

function UserSetting() {
  const dispatch = useDispatch();

  const userInfoReducer = useSelector((state) => state.userInfoReducer);
  const { userName, userPhoto, userEmail } = userInfoReducer.userInfo;
  const isLoggedInReducer = useSelector((state) => state.isLoggedInReducer);
  const { accessToken, path } = isLoggedInReducer.userLoggedIn;

  const [isPassword, setPassword] = useState(false);
  const [tempInfo, setTempInfo] = useState({
    username: userName,
    photo: undefined,
    password: undefined,
    passwordCheck: undefined,
  });

  function inputHandler(e) {
    setTempInfo({ ...tempInfo, [e.target.name]: e.target.value });
  }

  function inputPhoto(e) {
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

  let importexceleventhandler = async (e) => {
    await dispatch(importExcel(accessToken));
  };

  return (
    <div className="container_1">
      <div className="container_edit">
        {/* <div className="edit_title">프로필 편집</div> */}
        <div className="container_edit_mini">
          {isPassword ? (
            <div className="edit_inputZone">
              <button onClick={() => setPassword(false)}>뒤로가기</button>
              <form className="edit_form">
                <div className="edit_form_password">
                  <label
                    className="edit_form_label_password"
                    htmlFor="password"
                  >
                    기존 비밀번호
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={inputHandler}
                    className="edit_input"
                    required
                  />
                </div>
                <div className="edit_form_password">
                  <label
                    className="edit_form_label_password"
                    htmlFor="password"
                  >
                    새 비밀번호
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={inputHandler}
                    className="edit_input"
                    required
                  />
                </div>
                <div className="edit_form_password">
                  <label
                    className="edit_form_label_password"
                    htmlFor="passwordCheck"
                  >
                    비밀번호 확인
                  </label>
                  <input
                    id="passwordCheck"
                    name="passwordCheck"
                    type="password"
                    onChange={inputHandler}
                    className="edit_input"
                    required
                  />
                </div>
                <button
                  className="edit_submit password"
                  onClick={editInfoRequestHandler}
                >
                  비밀번호 변경
                </button>
              </form>
            </div>
          ) : (
            <div className="edit_inputZone">
              <div className="edit_img">
                <img src={userPhoto} alt="사진" className="pre_img" />
              </div>
              <form className="edit_form">
                {/* <div className="edit_form_photo">
                <label className="edit_form_label" htmlFor="photo">사진</label>
                <input
                  id="photo"
                  name="photo"
                  type="file"
                  accept="image/jpg, image/png, image/jpeg, image/gif"
                  onChange={inputPhoto}
                  className="edit_input"
                  required
                />
                </div> */}
                <div className="edit_form_nickname">
                  <label className="edit_form_label" htmlFor="nickname">
                    사용자명
                  </label>
                  <input
                    id="username"
                    name="username"
                    type="username"
                    onChange={inputHandler}
                    className="edit_input"
                    required
                    placeholder={userName}
                  ></input>
                </div>
                <div className="edit_form_email">
                  <label className="edit_form_label" htmlFor="email">
                    이메일
                  </label>
                  <div className="edit_input">{userEmail}</div>
                </div>
                <div className="edit_form_changepw">
                  <label />
                  <span
                    className="edit_form_label"
                    onClick={() => setPassword(true)}
                  >
                    비밀번호 변경
                  </span>
                </div>
                <button
                  className="edit_submit"
                  onClick={editInfoRequestHandler}
                >
                  수정
                </button>
              </form>
            </div>
          )}
        </div>
        {/* <div className="edit_title">설정</div> */}
        <div className="container_bottom">
          <div className="container_bottom_items">
            <div className="container_bottom_texts">메인페이지설정</div>
            <div className="container_bottom_save">저장</div>
          </div>
          <div className="container_bottom_items">
            <div className="container_bottom_texts">엑셀 파일 내보내기</div>
            <button
              className="container_bottom_excel"
              onClick={importexceleventhandler}
            >
              다운로드
            </button>
          </div>
          <div className="container_bottom_items">
            <div className="container_bottom_texts">다크모드</div>
            <div className="container_bottom_level"> - 2 레벨부터 사용가능</div>
          </div>
          <div className="container_bottom_items">
            <div className="container_bottom_texts">테마 설정</div>
            <div className="container_bottom_level"> - 2 레벨부터 사용가능</div>
          </div>
          <div className="container_bottom_items">
            <div className="container_bottom_texts">주기 설정</div>
            <div className="container_bottom_level"> - 2 레벨부터 사용가능</div>
          </div>
          <div className="container_bottom_items">
            <div className="container_bottom_texts">데이터삭제</div>
          </div>
          <div className="container_bottom_items">
            <div className="container_bottom_texts">회원 탈퇴</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSetting;
