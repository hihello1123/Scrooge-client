import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [isLegal, setLegal] = useState(false);
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    photo: '',
  });

  //함수 부분
  function clicked(e) {
    if (e.target.outerText === '카카오톡 버튼') {
      return console.log('카톡이지롱');
    } else if (e.target.outerText === '구글 버튼') {
      return console.log('구글이지롱');
    }
  }

  function inputHandler(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
    console.log(userInfo);
  }

  let emailChecker = async (e) => {
    e.preventDefault();

    if (!userInfo.email) {
      alert('이메일을 입력해주세요');
      return;
    }

    await axios
      .post(
        `${process.env.REACT_APP_API_URL}` + '/checkemail',
        { email: userInfo.email },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data.message);
        setLegal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const incodingFile = (e) => {
    e.preventDefault();
    // let reader = new FileReader();
    let file = e.target.files[0];
    setUserInfo({
      ...userInfo,
      itemphoto: file,
    });
    // if (file) {
    //   reader.readAsDataURL(file);
    //   reader.onload = (e) => {
    //     setInputs({
    //       ...inputs,
    //       itemphoto: e.target.result,
    //     });
    //   };
    // }
  };

  let signupRequestHandler = async (e) => {
    if (!userInfo.nickname || !userInfo.password || !userInfo.email) {
      if (!userInfo.email) {
        alert('처음부터 시도해주세요');
      }
      if (!userInfo.nickname) {
        alert('닉네임을 입력해주세요');
      }
      if (!userInfo.password) {
        alert('비밀번호를 입력해주세요');
      }
      return;
    } else if (userInfo.password !== userInfo.passwordCheck) {
      alert('비밀번호를 확인해주세요');
    }

    const fd = new FormData();
    fd.append('email', userInfo.email);
    fd.append('nickname', userInfo.nickname);
    fd.append('password', userInfo.password);
    fd.append('photo', userInfo.photo);
    console.log(fd);

    axios
      .post(`${process.env.REACT_APP_API_URL}` + '/signup', fd, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.message);
      });
  };

  //리턴 부분
  return (
    <div className="signup">
      {isLegal ? (
        <div className="inputZone">
          <form>
            <div>
              <label className="photo" htmlFor="photo">
                사진
              </label>
              <input
                name="photo"
                type="file"
                accept="image/jpg, image/png, image/jpeg, image/gif"
                onChange={incodingFile}
                className="photo"
                required
              ></input>
            </div>
            <div>
              <label className="nickname" htmlFor="nickname">
                닉네임
              </label>
              <input
                name="nickname"
                type="nickname"
                onChange={inputHandler}
                className="nickname"
                required
              ></input>
            </div>
            <div>
              <label className="password" htmlFor="password">
                비밀번호
              </label>
              <input
                name="password"
                type="password"
                onChange={inputHandler}
                className="password"
                required
              ></input>
            </div>
            <div>
              <label className="passwordCheck" htmlFor="passwordCheck">
                비밀번호 확인
              </label>
              <input
                name="passwordCheck"
                type="password"
                onChange={inputHandler}
                className="passwordCheck"
                required
              ></input>
            </div>
          </form>
          <button onClick={signupRequestHandler}>회원가입</button>
        </div>
      ) : (
        <div className="inputZone">
          <div className="kakaoTalk" onClick={clicked}>
            카카오톡 버튼
          </div>
          <div className="google" onClick={clicked}>
            구글 버튼
          </div>
          <form>
            <div className="signupCom">
              이메일
              <input
                className="emailInput"
                type="email"
                name="email"
                onChange={inputHandler}
                required
              />
            </div>
          </form>
          <button onClick={emailChecker}>회원가입</button>
        </div>
      )}
    </div>
  );
}

export default Signup;
