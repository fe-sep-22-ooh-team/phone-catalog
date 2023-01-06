import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';
import { PhonesPage } from './components/PhonesPage';

export const App: React.FC = () => (
  <div data-cy="app">
    <Header />

    <main className="section">
      <div className="container">
        <div className="grid">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/phones" element={<PhonesPage />} />
            <Route path="/accessories" element={<PhonesPage />} />
            <Route path="/tablets" element={<PhonesPage />} />
            <Route path="/cart" element={<PhonesPage />} />
            <Route path="/favorites" element={<PhonesPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);
