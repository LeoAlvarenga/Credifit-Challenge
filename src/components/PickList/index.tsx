import React, { SelectHTMLAttributes } from 'react';

import { Container } from './styles';
import { FaChevronDown } from 'react-icons/fa';

interface IPickListProps extends SelectHTMLAttributes<HTMLSelectElement> {}

const PickList: React.FC<IPickListProps> = ({children, ...restProps}) => {
  return <Container>
    <select name="" id="" {...restProps}>
    {children}
    </select>
    <FaChevronDown size={16} color='#8f8f8f' />
  </Container>
    
    }

export default PickList;