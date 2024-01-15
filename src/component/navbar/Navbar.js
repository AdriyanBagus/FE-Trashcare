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
        <li><a href='http://localhost:3000/'>Home</a></li>
        <li><a href='http://localhost:3000/artikel'>Artikel</a></li>
        <li><a href='http://localhost:3000/chatbot'>ChatBot</a></li>
        <li><a href='http://localhost:5000/'>Sentimen</a></li>
        <li><a href="http://localhost:3000/login" className='hide-login'>Login</a></li>
      </ul>
      <a href="http://localhost:3000/login" className="cta">
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