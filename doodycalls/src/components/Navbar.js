import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">PooPursuit</h1>
      <ul className="nav-links">
        <li>About Us</li>
        <li>Map</li>
        <li>Forum</li>
      </ul>
      <div className="login-icon">👤</div>
    </nav>
  );
}

export default Navbar;
