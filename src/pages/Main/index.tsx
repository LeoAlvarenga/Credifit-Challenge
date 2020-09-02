import React from 'react';

import { Container, Title } from './styles';
import Header from '../../components/Header';

const Main: React.FC = () => {
  return <Container>
      <Header />
      <Title>Solicitações de Empréstimo</Title>
  </Container>
}

export default Main;