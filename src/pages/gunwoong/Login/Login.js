import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../../styles/common.scss';
import './Login.scss';

const LoginGw = () => {
  const [inputs, setInputs] = useState({
    userId: '',
    userPw: '',
  });

  const { userId, userPw } = inputs; //객체 구조분해할당해서 string값으로 사용할 수 있다. 안하면 inputs.userId 로 사용해야 돼

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/mainGw');
  };

  const onChange = e => {
    //눌렀을 때 inputs value 값이 바뀌어야 돼
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const isActive = userId.includes('@') && userPw.length >= 5;

  const goFetch = () => {
    fetch('http://10.58.52.110:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=utf-8' },
      body: JSON.stringify({ email: userId, password: userPw }),
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
          onChange={onChange}
          name="userId"
          value={userId}
        />
        <input
          id="loginPwInput"
          type="password"
          placeholder="비밀번호"
          onChange={onChange}
          name="userPw"
          value={userPw}
        />
        <button
          id="loginBtn"
          onClick={goToMain}
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
