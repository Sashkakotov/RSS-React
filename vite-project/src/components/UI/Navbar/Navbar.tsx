import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            Home
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            About Us
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Navbar;
