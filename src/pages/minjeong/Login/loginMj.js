/* eslint-disable */
import React, { useState } from 'react';
import './loginMj.scss';
import { useNavigate } from 'react-router-dom';

function LoginMj() {
  const navigate = useNavigate();
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');

  function saveUserId(evnet) {
    setId(event.target.value);
    console.log('id :', id);
  }

  function saveUserPw(evnet) {
    setPw(event.target.value);
    console.log('pw :', pw);
  }

  const goToMain = () => {
    saveUserId.inclu;
    navigate('/mainmj');
  };

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
          onClick={e => {
            setId(e.target.value).inclu('@') && setPw(e.target.value) > 5
              ? button
              : disable;
          }}
          className="disabled"
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
