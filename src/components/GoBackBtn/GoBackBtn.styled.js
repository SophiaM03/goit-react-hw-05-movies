import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

export const GoBackButton = styled(Link)`
  color: #0011ff38;
  letter-spacing: 0.06em;
  display: block;
  border: 1px solid;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 5px 10px;
  width: 150px;
  transition: background-color #0011ff38;
  &:hover,
  &:focus {
    background-color: #1f24b9ba;
  }
`;
