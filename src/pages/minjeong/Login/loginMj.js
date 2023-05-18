/* eslint-disable */
import React, { useState } from 'react';
import './loginMj.scss';
import { useNavigate } from 'react-router-dom';

function LoginMj() {
  const navigate = useNavigate();
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');
  let [isValid, setIsValid] = useState(false);

  function saveUserId(event) {
    setId(event.target.value);
    console.log('id :', id);
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
    <div className="Login">
      <div className="inputBox">
        <p className="westagram">Westagram</p>
        <input
          className="inputId"
          type={'text'}
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={saveUserId}
        />
        <input
          className="inputPw"
          type={'password'}
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
