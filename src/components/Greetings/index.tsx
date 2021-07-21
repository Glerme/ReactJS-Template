import React from 'react';

import Logo from '../../assets/logo.png';

import { Container } from './styles';

const Greetings: React.FC = () => {
  return (
    <Container>
      <img src={Logo} />
      <h1>React Starter</h1>
      <p>
        An React boilerplate including TypeScript, Styled Components and ESLint.
      </p>
    </Container>
  );
};

export { Greetings };
