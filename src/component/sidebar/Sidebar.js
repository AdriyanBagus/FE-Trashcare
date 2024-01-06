import React, { useState } from 'react';
import './SidebarStyle.css';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className='header-admin'>
      <ul className={`admin-link ${showNav ? 'show' : ''}`}>
        <li><a href='/admin'>Dashboard</a></li>
        <li><a href='/tambahdata'>Tambah Data</a></li>
        <li><a href='/editdata'>Edit Data</a></li>
        <li><a href='/viewdata'>Lihat Data</a></li>
        <li><a href='/'>Home Page</a></li>
      </ul>
      <div className='hamburger' onClick={toggleNav}>
        <div className={`bar ${showNav ? 'change' : ''}`}></div>
        <div className={`bar ${showNav ? 'change' : ''}`}></div>
        <div className={`bar ${showNav ? 'change' : ''}`}></div>
      </div>
    </div>
  );
};

export default Sidebar;
