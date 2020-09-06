import React from "react";

import { Container, Table, ListFooter } from "./styles";
import Button from "../Button";
import PickList from "../PickList";

const LoanList: React.FC = () => {
  return (
    <Container>
      <Table>
        <thead>
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
        </thead>
        <tbody>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>nome</td>
            <td>00000000000</td>
            <td>00000000</td>
            <td>00000000</td>
            <td>00</td>
            <td>00</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>nome</td>
            <td>00000000000</td>
            <td>00000000</td>
            <td>00000000</td>
            <td>00</td>
            <td>00</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>nome</td>
            <td>00000000000</td>
            <td>00000000</td>
            <td>00000000</td>
            <td>00</td>
            <td>00</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>nome</td>
            <td>00000000000</td>
            <td>00000000</td>
            <td>00000000</td>
            <td>00</td>
            <td>00</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>nome</td>
            <td>00000000000</td>
            <td>00000000</td>
            <td>00000000</td>
            <td>00</td>
            <td>00</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>nome</td>
            <td>00000000000</td>
            <td>00000000</td>
            <td>00000000</td>
            <td>00</td>
            <td>00</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>nome</td>
            <td>00000000000</td>
            <td>00000000</td>
            <td>00000000</td>
            <td>00</td>
            <td>00</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>nome</td>
            <td>00000000000</td>
            <td>00000000</td>
            <td>00000000</td>
            <td>00</td>
            <td>00</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>nome</td>
            <td>00000000000</td>
            <td>00000000</td>
            <td>00000000</td>
            <td>00</td>
            <td>00</td>
          </tr>
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>nome</td>
            <td>00000000000</td>
            <td>00000000</td>
            <td>00000000</td>
            <td>00</td>
            <td>00</td>
          </tr>
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
