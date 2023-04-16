import React from 'react';

import { ERROR_PAGE_TITLE } from '../constants/constants';

const Error = () => {
  return (
    <main>
      <h1 data-testid="error">{ERROR_PAGE_TITLE}</h1>
    </main>
  );
};
export default Error;
