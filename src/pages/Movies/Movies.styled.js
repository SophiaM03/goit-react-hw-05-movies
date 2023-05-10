import styled from 'styled-components';
export const MoviesList = styled.ul`
  display: block;

  max-width: 100%;
  margin: 10px auto 0px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  list-style: none;
`;
