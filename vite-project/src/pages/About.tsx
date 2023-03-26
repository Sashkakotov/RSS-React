import React, { Component } from 'react';

import { ABOUT_PAGE_TITLE } from '../constants/constants';

class About extends Component {
  render() {
    return (
      <main className="main">
        <h1>{ABOUT_PAGE_TITLE}</h1>
      </main>
    );
  }
}
export default About;
