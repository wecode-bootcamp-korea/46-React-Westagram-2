/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginMj.scss';

function LoginMj() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isValid, setIsValid] = useState(false);

  function saveUserId(event) {
    setId(event.target.value);
  }

  function saveUserPw(event) {
    setPw(event.target.value);
    console.log('pw :', pw);
  }

  const goToMain = () => {
    navigate('/mainmj');
  };

  const isActive = id.includes('@') && pw.length >= 5;

  return (
    <div className="login">
      <div className="inputBox">
        <p className="westagram">Westagram</p>
        <input
          className="inputId"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={saveUserId}
        />
        <input
          className="inputPw"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPw}
        />
        <button
          onClick={goToMain}
          className={isActive ? 'abledButton' : 'disabled'}
          type="button"
        >
          로그인
        </button>
        <a href="@@">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default LoginMj;
