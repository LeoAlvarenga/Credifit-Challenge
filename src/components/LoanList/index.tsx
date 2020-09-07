import React, { useState, useEffect } from "react";

import { Container, Table, ListFooter } from "./styles";
import Button from "../Button";
import PickList from "../PickList";
import { IUsers } from "../../models/interfaces";
import { useJsonData } from "../../hooks/useJsonData";

const LoanList: React.FC = () => {
  const [list, setList] = useState<IUsers[]>([]);

  const { renderUsers } = useJsonData();

  useEffect(() => {
    const newList = renderUsers.sort()
    setList(renderUsers);
  }, [renderUsers]);
  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th></th>
            <th>NOME</th>
            <th>CPF</th>
            <th>
              SALÁRIO
              <br />
              DISPONÍVEL(R$)
            </th>
            <th>
              VALOR
              <br /> FINANCIADO(R$)
            </th>
            <th>%</th>
            <th>PARCELAS</th>
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((user) => (
              <tr>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{user.name}</td>
                <td>{user.cpf}</td>
                <td>{user.salary}</td>
                <td>{user.value}</td>
                <td>00</td>
                <td>00</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <ListFooter>
        <PickList>
          <option value="#">Escolha uma opção... </option>
        </PickList>
        <Button>Nenhuma ação Selecionada</Button>
      </ListFooter>
    </Container>
  );
};

export default LoanList;
