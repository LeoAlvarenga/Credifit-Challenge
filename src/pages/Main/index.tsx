import React from "react";

import "antd/dist/antd.css";
import { Container, Title, MainBody, MainFooter } from "./styles";
import Header from "../../components/Header";
import LoanList from "../../components/LoanList";
import PaginationControl from "../../components/PaginationControl";
import { Modal, notification } from "antd";
import { useJsonData } from "../../hooks/useJsonData";

const Main: React.FC = () => {
  const {
    modalVisibility,
    setModalVisibility,
    option,
    handleConfirm,
    checkedIdList,
  } = useJsonData();

  const openNotificationWithIcon = () => {
    notification.open({
      message: `${checkedIdList.length} Solicitações de empréstimo foram ${option === "approved" ? "aceitas" : "rejeitadas"} com sucesso`,
      // description:
      //   `${checkedIdList.length} Solicitações de empréstimo foram ${option === "approved" ? "aceitas" : "rejeitadas"} com sucesso`,
        type: "success",
        style: {background: "#F6FFED"}
    });
  };

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
          openNotificationWithIcon();
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
