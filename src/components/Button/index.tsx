import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  disabledText?: string;
}

const Button: React.FC<IButtonProps> = ({children, disabledText, ...restProps}) => {
  return <Container type="button" {...restProps}>
    {restProps.disabled && disabledText ? (disabledText) : (children)}
  </Container>;
}

export default Button;