import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  align-self: center;
`;

export const PageNumbersList = styled.ul`
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {
    flex-wrap: wrap;
    padding: 0 16px;
  }
`;

export const PageItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  color: #8f8f8f;
  margin: 4px;
  transition: 0.4;
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.152125);
  border-radius: 8px;
  height: 32px;
  width: 32px;
  font-family: 'Quicksand', sans-serif;
  font-size: 13px;
  text-align: center;

  @media screen and (max-width: 480px) {
    margin: 8px;
  }

  &:hover {
    color: ${shade(0.2, "#145685")};
    cursor: pointer;
  }
`;
