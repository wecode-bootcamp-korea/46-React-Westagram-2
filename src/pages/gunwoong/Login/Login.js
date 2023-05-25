import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/common.scss';
import './Login.scss';

const LoginGw = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/mainGw');
  };

  const savedUserId = event => {
    setId(event.target.value);
  };

  const savedUserPw = event => {
    setPw(event.target.value);
  };

  const isActive = id.includes('@') && pw.length >= 5;

  const goFetch = () => {
    fetch('http://10.58.52.110:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: id, password: pw }),
    }) //요청
      .then(res => res.json())
      .then(data => console.log(data));
  };

  return (
    <div className="loginGw">
      <h1 className="logoText">westagram</h1>
      <div className="login">
        <input
          id="loginIdInput"
          type="text"
          placeholder="전화번호,사용자 이름 또는 이메일"
          onChange={savedUserId}
        />
        <input
          id="loginPwInput"
          type="password"
          placeholder="비밀번호"
          onChange={savedUserPw}
        />
        <button
          id="loginBtn"
          onClick={goFetch}
          disabled={!isActive}
          className={isActive ? 'tomato' : 'orange'}
        >
          로그인
        </button>
      </div>
      <div className="loginLink">
        <Link to="/mainGw">비밀번호를 잊으셨습니까?</Link>
      </div>
    </div>
  );
};

export default LoginGw;
