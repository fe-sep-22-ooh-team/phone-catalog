import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';
import { PhonesPage } from './components/PhonesPage';

export const App: React.FC = () => (
  <div data-cy="app">
    <main className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/phones" element={<PhonesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </main>
  </div>
);
