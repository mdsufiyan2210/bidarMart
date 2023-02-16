import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <a href="/" className="navbar-logo">
        YourLogo
      </a>
      <ul className="navbar-menu">
        <li className="navbar-menu-item">
          <a href="/shop">Shop</a>
        </li>
        <li className="navbar-menu-item">
          <a href="/about">About</a>
        </li>
        <li className="navbar-menu-item">
          <a href="/contact">Contact</a>
        </li>
        <li className="navbar-menu-item">
          <a href="/cart">Cart</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
