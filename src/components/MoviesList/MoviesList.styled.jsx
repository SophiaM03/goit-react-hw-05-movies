import { Link } from 'react-router-dom';
import styled from 'styled-components';
export const List = styled.ul`
  list-style: none;
`;

export const MoviesItem = styled.li`
  overflow: hidden;
`;

export const LinkFilm = styled(Link)`
  text-decoration: none;
`;

export const MovieTitle = styled.p`
  display: flex;
  margin-bottom: 10px;
  margin-top: 10px;
  text-align: center;
  color: black;
`;
