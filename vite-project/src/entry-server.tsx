import React from 'react';
import { Provider } from 'react-redux';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from './App';
import { setupStore } from './store/store';

export const render = (url: string, options?: object) => {
  console.log('asasas');

  return renderToPipeableStream(
    <Provider store={setupStore()}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    options
  );
};
