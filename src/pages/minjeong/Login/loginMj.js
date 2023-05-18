/* eslint-disable */
import React from 'react';
import './loginMj.scss';
import { useNavigate } from 'react-router-dom';

function LoginMj() {
  const navigate = useNavigate();

  const goToMain = () => {
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
        />
        <input className="inputPw" type={'password'} placeholder="비밀번호" />
        <button onClick={goToMain} className="disabled" type="button">
          로그인
        </button>
        <a href="@@">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default LoginMj;
