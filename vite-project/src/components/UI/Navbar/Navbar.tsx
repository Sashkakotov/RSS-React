import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import { ABOUT_LINK, HOME_LINK } from '../../../constants/constants';
import styles from './Navbar.module.css';
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            {HOME_LINK}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : undefined)}>
            {ABOUT_LINK}
          </NavLink>
        </div>
      </div>
    );
  }
}
export default Navbar;
