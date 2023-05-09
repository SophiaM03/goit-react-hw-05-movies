import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  min-width: 150px;
  margin: 10px 0;
  padding: 10px 15px;
  background-color: transparent;
  border: 2px solid white;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.95em;
  font-weight: 600;
  line-height: 1;
  border-color: white;
  color: #fff;
  transition: all 150ms ease-in-out;
  &:hover {
    background-color: #90cea1;
    color: #fff;
    outline: 0;
  }
  &:focus {
    outline: 0;
  }
`;
export const Movies = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
`;

export const Img = styled.img`
  display: block;
  max-width: 100%;
  height: auto;
`;

export const About = styled.div`
  margin-left: 20px;
`;

export const Link = styled(NavLink)`
  padding: 12px;
  text-decoration: none;
  color: white;
  font-size: 18px;
  &:active {
    color: #e3f309cb;
  }
`;
export const Nav = styled.div`
  padding-bottom: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid #fff;
`;
