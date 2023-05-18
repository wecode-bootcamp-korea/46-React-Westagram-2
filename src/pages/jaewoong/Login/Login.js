import './Login.scss';
import '../../../styles/common.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginJw() {
  let [id, setId] = useState('');
  const navigate = useNavigate();
  const saveUserId = e => {
    setId(e.target.value);
  };
  return (
    <div className="container">
      <div className="login-box">
        <h1 className="font">Westagram</h1>

        <form action="">
          <input
            type="text"
            placeholder="전화번호,사용자 이름 또는 이메일"
            id="id"
            className=""
            onChange={saveUserId}
          />
          <input
            type="password"
            placeholder="비밀번호"
            id="pw"
            className="input"
            onChange={saveUserId}
          />
        </form>

        <button
          className="login-btn"
          onClick={() => {
            navigate('/main');
          }}
        >
          로그인
        </button>

        <div className="repassword">
          <a href="">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginJw;
