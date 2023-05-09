import React from 'react';
import { ErrorTitle, ErrorText } from './Error.styled';

export default function Error() {
  return (
    <div>
      <ErrorTitle>Error</ErrorTitle>
      <ErrorText>Ooop's! You weren't supposed to see this</ErrorText>
      <ErrorText>The page you are looking for no longer exists.</ErrorText>
    </div>
  );
}
