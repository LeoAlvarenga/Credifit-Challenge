import React from "react";

import { Container, Title, MainBody, MainFooter } from "./styles";
import Header from "../../components/Header";
import LoanList from "../../components/LoanList";
import PaginationControl from "../../components/PaginationControl";

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainBody>
        <Title>Solicitações de Empréstimo</Title>
        <LoanList />
      <MainFooter>
        <PaginationControl />
      </MainFooter>
      </MainBody>
    </Container>
  );
};

export default Main;
