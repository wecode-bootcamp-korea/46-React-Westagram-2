import React, { useState } from 'react';
import '../../../styles/common.scss';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginGw = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/mainGw');
  };

  const saveUserId = event => {
    setId(event.target.value);
  };

  const savedUserPw = event => {
    setPw(event.target.value);
  };
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>westagram-로그인</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
        rel="stylesheet"
      />
      <div className="container">
        <h1 className="logoText">westagram</h1>
        <div className="login">
          <input
            id="loginIdInput"
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
            onChange={() => {
              saveUserId();
            }}
          />
          <input
            id="loginPwInput"
            type="password"
            placeholder="비밀번호"
            onChange={() => {
              savedUserPw();
            }}
          />
          <button id="loginBtn" onClick={goToMain}>
            로그인
          </button>
        </div>
        <div className="loginLink">
          <Link to="/mainGw">비밀번호를 잊으셨습니까?</Link>
        </div>
      </div>
    </>
  );
};

export default LoginGw;
