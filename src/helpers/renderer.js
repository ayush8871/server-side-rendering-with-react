import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

module.exports = () => {
  const content = renderToString(<Home />);

  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
      </body>
      <script src="bundle.js"></script>
    </html>
  `;
}