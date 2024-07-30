import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App1 from './App';
import { ContextProvider } from './ADMIN_SCREEN/contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App1 />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
