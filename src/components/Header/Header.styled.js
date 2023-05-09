import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled(Nav)`
  margin: 20px auto 0;
  text-align: start;
`;
export const NaviLink = styled(NavLink)`
  display: inline-block;
  padding: 20px 20px;
  font-weight: 800;
  color: #fff;
  font-size: 20px;
  text-decoration: none;
  text-transform: uppercase;
  &.active {
    color: #01b4e4;
  }
`;
