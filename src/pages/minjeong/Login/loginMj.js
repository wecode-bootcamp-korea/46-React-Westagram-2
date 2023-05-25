/* eslint-disable */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginMj.scss';

function LoginMj() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  function saveUserId(event) {
    setId(event.target.value);
  }

  function saveUserPw(event) {
    setPw(event.target.value);
  }

  const goToMain = () => {
    navigate('/mainmj');
  };

  const INPUT_DATA = [
    {
      id: 1,
      className: 'inputId',
      type: 'text',
      placeholder: '전화번호, 사용자 이름 또는 이메일',
      onchange: saveUserId,
    },
    {
      id: 2,
      className: 'inputPw',
      type: 'password',
      placeholder: '비밀번호',
      onchange: saveUserPw,
    },
  ];
  const isActive = id.includes('@') && pw.length >= 5;

  const handleButton = () => {
    fetch('http://10.58.52.71:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(res => {
        if (res.status !== 500) {
          return res.json();
        }
        throw new Error('통신 실패!');
      })
      .then(data => {
        console.log(data);
        if (data.message === 'INVALID_USER') {
          alert('로그인 실패!');
        } else {
          alert('로그인 성공!');
          localStorage.setItem('TOKEN', data.token);
          navigate('/mainMJ');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="login">
      <div className="inputBox">
        <p className="westagram">Westagram</p>
        {INPUT_DATA.map(info => {
          return (
            <input
              key={info.id}
              className={info.className}
              type={info.type}
              placeholder={info.placeholder}
              onChange={info.onchange}
            />
          );
        })}

        <button
          onClick={handleButton}
          className={isActive ? 'abledButton' : 'disabled'}
          type="button"
          disabled={!isActive}
        >
          로그인
        </button>
        <a href="@@">비밀번호를 잊으셨나요?</a>
      </div>
    </div>
  );
}

export default LoginMj;

//
