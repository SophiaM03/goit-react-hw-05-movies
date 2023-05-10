import React from 'react';
import { ErrorTitle, ErrorText } from './Error.styled';

export default function Error() {
  return (
    <div>
      <ErrorTitle>Error</ErrorTitle>
      <ErrorText>The page you are looking for no longer exists.</ErrorText>
    </div>
  );
}
