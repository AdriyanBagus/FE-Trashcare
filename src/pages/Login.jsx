import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../component/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Menggunakan useNavigate untuk navigasi

  const handleLogin = async () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Username and password are required.');
      return;
    }

    try {
      const response = await fetch('http://localhost:7000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        alert('Login successful');
        navigate('/admin'); // Gunakan navigate('/admin') untuk redireksi
      } else {
        alert(`Login failed. ${data.message}`);
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
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
          <a href='/'>
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
