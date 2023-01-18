import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div>
      <Link to="/">Voltar para o ínicio</Link>
      <p>Pagina nao encontrada</p>
    </div>
  );
};
