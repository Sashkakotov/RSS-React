import React from 'react';
import { Provider } from 'react-redux';
import { renderToPipeableStream, RenderToPipeableStreamOptions } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

import App from './App';
import { setupStore } from './store/store';

export const render = (url: string | Partial<Location>, opts?: RenderToPipeableStreamOptions) => {
  return renderToPipeableStream(
    <Provider store={setupStore()}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    opts
  );
};
