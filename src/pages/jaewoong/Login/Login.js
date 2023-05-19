import './Login.scss';
import '../../../styles/common.scss';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginJw() {
  let [id, setId] = useState('');
  let [pw, setPw] = useState('');
  const navigate = useNavigate();
  const saveUserId = e => {
    setId(e.target.value);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
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
            onChange={saveUserPw}
          />
        </form>
        <button
          className={
            id.includes('@') && pw.length >= 5 ? 'login-on' : 'login-btn'
          }
          onClick={() => {
            id.includes('@') && pw.length >= 5
              ? navigate('/mainjw')
              : navigate('/loginjw');
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
