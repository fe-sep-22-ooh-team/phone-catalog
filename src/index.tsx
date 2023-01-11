import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import './index.scss';

import { App } from './App';
import { ContextFavCartProvider } from './components/ContextFavCart';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <ContextFavCartProvider>
    <Router>
      <App />
    </Router>
  </ContextFavCartProvider>,
);
