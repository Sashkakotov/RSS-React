import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <div className="navbar-links">
          <Link to="/home">Home</Link>
          <Link to="/about">About Us</Link>
        </div>
      </div>
    );
  }
}
export default Navbar;
