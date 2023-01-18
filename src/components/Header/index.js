import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavContainer } from './style';

export const Header = () => {
  return (
    <NavContainer>
      <NavLink to="/" end>
        Produtos
      </NavLink>
      <NavLink to="/contato">Contato</NavLink>
    </NavContainer>
  );
};
