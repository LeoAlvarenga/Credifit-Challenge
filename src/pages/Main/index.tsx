import React from "react";

import { Container, Title, MainBody, MainFooter } from "./styles";
import Header from "../../components/Header";
import LoanList from "../../components/LoanList";
import PaginationControl from "../../components/PaginationControl";
import { Modal } from "antd";
import 'antd/dist/antd.css';
import { useJsonData } from "../../hooks/useJsonData";

const Main: React.FC = () => {

  const { modalVisibility, setModalVisibility, option, handleConfirm, checkedIdList } = useJsonData()

  return (
    <Container>
      <Header />
      <MainBody>
        <Title>Solicitações de Empréstimo </Title>
        <LoanList />
        <MainFooter>
          <PaginationControl />
        </MainFooter>
      </MainBody>
      <Modal
        title={`${option === "approved" ? "Aceitar" : "Rejeitar"} ${
          checkedIdList.length
        } Solicitações`}
        onOk={() => {
          handleConfirm(option);
          setModalVisibility(false);
        }}
        onCancel={() => setModalVisibility(false)}
        okText="Confirmar"
        cancelText="cancelar"
        okType="danger"
        visible={modalVisibility}
      >
        <p>
          Você pode ter colaboradores selecionados em outras páginas. Tem
          certeza que deseja aceitar todas as solicitações?
        </p>
      </Modal>
    </Container>
  );
};

export default Main;
