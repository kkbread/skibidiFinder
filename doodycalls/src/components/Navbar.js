import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href='/'>
      <div className="navbar-logo">
        <img
          src={require("../assets/logo.png")} // Replace with your logo URL
          alt="DoodyCalls Logo"
          className="logo-icon"
        />
        <span className="logo-text">DoodyCalls</span>
      </div>
      </a>
      <ul className="navbar-links">
        <li><a href="/about">About</a></li>
        <li><a href="/map">Doody Locater</a></li>
        <li><a href="/forum">Forum</a></li>
      </ul>
      <div className="navbar-search-profile">
        <div className="search-bar">
          <input type="text" placeholder="search..." />
          <button className="search-button">🔍</button>
        </div>
        <div className="profile-icon">
          <img
            src={require("../assets/pfp.jpg")} // Replace with your profile icon URL
            alt="Profile"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
