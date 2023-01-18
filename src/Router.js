import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Contato } from './pages/Contato';
import { Home } from './pages/Home';
import { Produto } from './pages/Home/components/Produto';
import { NotFound } from './pages/NotFound';

export const Router = () => {
  return (
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="contato" element={<Contato />} />
      <Route path="produto/:id/*" element={<Produto />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
