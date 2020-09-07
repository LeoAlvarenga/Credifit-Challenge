import React, { useState, useEffect, useCallback } from "react";
import LogoImg from "../../assets/logo.svg";

import { Container, Logo, NavBar, UserInfo, Avatar } from "./styles";
import { useJsonData } from "../../hooks/useJsonData";

const Header: React.FC = () => {

  const [companyName, setCompanyName] = useState<string>('Company name');

  const { companies } = useJsonData();

  useEffect(() => {
    const company = companies.find(e => e.selected === true);
    if(company){
      setCompanyName(company?.fantasyName)
    }
  }, [companies, companyName])

  // const handleAvatar = useCallback(() => {
  //   companyName
  // },[companyName])

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
          <p>{companyName}</p>
        </UserInfo>
      </NavBar>
    </Container>
  );
};

export default Header;
