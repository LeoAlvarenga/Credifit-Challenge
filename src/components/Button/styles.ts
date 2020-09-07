import styled, { css } from "styled-components";
import { IconBaseProps } from "react-icons/lib";

interface IContainerProps {
  disabled?: boolean;
}

export const Container = styled.button<IContainerProps>`
  background: #ff7600;
  border: 0px;
  border-radius: 2px;
  height: 40px;
  width: 151px;

  font-weight: bold;
  color: #fff;
  font-size: 13px;

  ${(props) =>
    props.disabled &&
    css`
      background: #dadada;
    `}
`;
