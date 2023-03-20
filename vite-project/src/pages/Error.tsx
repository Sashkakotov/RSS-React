import React, { Component } from 'react';

import { ERROR_PAGE_TITLE } from '../constants/constants';

class Error extends Component {
  render() {
    return (
      <main>
        <h1>{ERROR_PAGE_TITLE}</h1>
      </main>
    );
  }
}
export default Error;
