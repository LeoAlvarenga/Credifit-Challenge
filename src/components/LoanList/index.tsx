import React, { useState, useEffect, useCallback } from "react";
import { Modal } from "antd";

import { Container, Table, ListFooter } from "./styles";
import Button from "../Button";
import PickList from "../PickList";
import { IUsers } from "../../models/interfaces";
import { useJsonData } from "../../hooks/useJsonData";
import { toBRLCurrency } from "../../utils/toBRLCurrency";

const LoanList: React.FC = () => {
  const [list, setList] = useState<IUsers[]>([]);

  const {
    renderUsers,
    checkedIdList,
    handleCheck,
    modalVisibility,
    setModalVisibility,
    setOption,
    option
  } = useJsonData();

  useEffect(() => {
    const newList = renderUsers.sort();
    setList(newList);
  }, [renderUsers]);

  useEffect(() => {
    console.log(checkedIdList);
  }, [checkedIdList]);

  // const handleCheck = useCallback(
  //   (userId: string) => {
  //     if (checkedIdList.find((id) => id === userId)) {
  //       setCheckedIdList(checkedIdList.filter((id) => id !== userId));
  //       return;
  //     } else {
  //       checkedIdList.push(userId);
  //       setCheckedIdList(checkedIdList);
  //     }

  //     const newArr = checkedIdList;
  //   },
  //   [checkedIdList, setCheckedIdList]
  // );

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
              <tr key={user.id}>
                <td>
                  <input
                    type="checkbox"
                    value={user.id}
                    onChange={(e) => handleCheck(e.currentTarget.value)}
                    checked={!!checkedIdList.find((id) => id === user.id)}
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.cpf}</td>
                <td>{toBRLCurrency(user.salary)}</td>
                <td>{toBRLCurrency(user.value)}</td>
                <td>00</td>
                <td>00</td>
              </tr>
            ))}
        </tbody>
      </Table>
      <ListFooter>
        <PickList onChange={(e) => setOption(e.currentTarget.value)}>
          <option value="">Escolha uma opção... </option>
          <option value="approved">Aprovar</option>
          <option value="rejected">Rejeitar</option>
        </PickList>
        <Button
          disabled={!(checkedIdList.length > 0 && option)}
          disabledText="Nenhuma ação selecionada"
          onClick={() => setModalVisibility(true)}
        >
          Confirmar
        </Button>
      </ListFooter>
      
    </Container>
  );
};

export default LoanList;
