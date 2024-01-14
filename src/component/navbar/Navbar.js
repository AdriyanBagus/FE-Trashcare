import React, { useState } from 'react';
import './NavbarStyle.css';
import logo from '../../img/logo.png';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className='header'>
      <img src={logo} className='logo' alt="logo" />
      <ul className={`nav__links ${showNav ? 'show' : ''}`}>
        <li><a href='https://38e7-36-68-53-27.ngrok-free.app/'>Home</a></li>
        <li><a href='https://38e7-36-68-53-27.ngrok-free.app/artikel'>Artikel</a></li>
        <li><a href='https://38e7-36-68-53-27.ngrok-free.app/chatbot'>ChatBot</a></li>
        <li><a href='https://9321-36-68-53-27.ngrok-free.app'>Sentimen</a></li>
        <li><a href="https://38e7-36-68-53-27.ngrok-free.app/login" className='hide-login'>Login</a></li>
      </ul>
      <a href="https://38e7-36-68-53-27.ngrok-free.app/login" className="cta">
        <button>Login</button>
      </a>
      <div className='hamburger' onClick={toggleNav}>
        <div className={`bar ${showNav ? 'change' : ''}`}></div>
        <div className={`bar ${showNav ? 'change' : ''}`}></div>
        <div className={`bar ${showNav ? 'change' : ''}`}></div>
      </div>
    </div>
  );
};

export default Navbar;