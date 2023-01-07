import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { AccessoriesPage } from './components/AccessoriesPage';
import { CartPage } from './components/CartPage';
import { ContactsPage } from './components/ContactsPage';
import { FavoritesPage } from './components/FavoritesPage';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';
import { PhonesPage } from './components/PhonesPage';
import { RightsPage } from './components/RightsPage';
import { TabletsPage } from './components/TabletsPage';
import { Footer } from './components/Footer';

export const App: React.FC = () => (
  <div data-cy="app" className="page">
    <Header />

    <main className="page__section">
      <div className="container">
        <div className="grid">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/phones" element={<PhonesPage />} />
            <Route path="/accessories" element={<AccessoriesPage />} />
            <Route path="/tablets" element={<TabletsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/rights" element={<RightsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);
