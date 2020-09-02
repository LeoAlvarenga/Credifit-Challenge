import React from "react";
import LogoImg from "../../assets/logo.svg";

import { Container, Logo, NavBar, UserInfo, Avatar } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={LogoImg} alt="Credifit Logo" />
      <NavBar>
        <a href="#">
          <h4>Contratos</h4>
        </a>
        <a href="#">
          <h4>Solicitações</h4>
        </a>
        <a href="#">
          <h4>Importar Folha</h4>
        </a>
        <a href="#">
          <h4>Relatório</h4>
        </a>
        <UserInfo>
          <Avatar>
            <h4>TA</h4>
          </Avatar>
          <p>iSorensen Tecnologia</p>
        </UserInfo>
      </NavBar>
    </Container>
  );
};

export default Header;
