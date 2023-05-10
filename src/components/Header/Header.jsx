import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav, NaviLink } from './Header.styled';

const Header = () => {
  return (
    <>
      <Nav>
        <NaviLink to={'/'}>Home</NaviLink>
        <NaviLink to={'/movies'}>Movies</NaviLink>
      </Nav>
      <Outlet />
    </>
  );
};

export default Header;
