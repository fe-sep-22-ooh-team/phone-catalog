import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { AccessoriesPage } from './modules/AccessoriesPage';
import { CartPage } from './modules/CartPage';
import { ContactsPage } from './modules/ContactsPage';
import { FavoritesPage } from './modules/FavoritesPage';
import { HomePage } from './modules/HomePage';
import { NotFoundPage } from './modules/NotFoundPage';
import { PhonesPage } from './modules/PhonesPage';
import { RightsPage } from './modules/RightsPage';
import { TabletsPage } from './modules/TabletsPage';
import { Footer } from './components/Footer';

export const App: React.FC = () => (
  <div className="page">
    <Header />

    <main className="page__section">
      <div className="container">
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
    </main>

    <Footer />
  </div>
);