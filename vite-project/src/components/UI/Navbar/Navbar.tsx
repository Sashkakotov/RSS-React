import React from 'react';
import { NavLink } from 'react-router-dom';

import { ABOUT_LINK, FORMS__LINK, HOME_LINK } from '../../../constants/constants';

import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : undefined)}>
          {HOME_LINK}
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : undefined)}>
          {ABOUT_LINK}
        </NavLink>
        <NavLink to="/forms" className={({ isActive }) => (isActive ? styles.active : undefined)}>
          {FORMS__LINK}
        </NavLink>
      </div>
    </div>
  );
};
export default Navbar;
