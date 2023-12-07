import React, { useState } from 'react';
import '../component/Login.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Pemeriksaan input kosong
    if (username.trim() === '' || password.trim() === '') {
      alert('Username and password are required.');
      return;
    }

    // Simulasi validasi login (ganti dengan validasi server yang sebenarnya)
    if (username === 'Adriyan' && password === '1234') {
      setLoggedIn(true);
    } else {
      alert('Login failed. Please check your username and password.');
    }
  };

  return (
    <div className="form-main">
      <div className="form-left">
        <div className="text-main"></div>
      </div>
      <div className="form-right">
        <div className="brand">
          <h3 className="login">Welcome Back</h3>
        </div>
        <div className="btn-input">
          <p className="label-login">Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <hr />
          <p className="label-login">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <hr />
          <p className="label-login">
            <a className="btn-forgot" href="">
              Forgot password ?
            </a>
          </p>
        </div>
        <div className="clear"></div>
        <div className="form-bottom">
          <a href='/admin'>
            <button className="btn-sign" onClick={handleLogin}>
              Login
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
