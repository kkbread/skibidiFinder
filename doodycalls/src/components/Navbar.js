import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">PooPursuit</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/map">Map</Link></li>
        <li><Link to="/forum">Forum</Link></li>
      </ul>
      <div className="login-icon">🔒</div>
    </nav>
  );
}

export default Navbar;
