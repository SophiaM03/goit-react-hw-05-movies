import React from 'react';
import { Nav, NaviLink } from './Header.styled';

export const Header = () => {
  return (
    <>
      <Nav>
        <NaviLink to={'/'}>Home</NaviLink>
        <NaviLink to={'/movies'}>Movies</NaviLink>
      </Nav>
    </>
  );
};
