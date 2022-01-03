import React from 'react';

import { Container } from './styles';

export const Greetings: React.FC = () => {
  return (
    <Container>
      <img src={'/logo.png'} alt="Logo" title="Logo" />
      <h1>React Starter</h1>
      <p>
        A React boilerplate including TypeScript, Styled Components and ESLint.
      </p>
    </Container>
  );
};
