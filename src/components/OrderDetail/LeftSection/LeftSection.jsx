import React from 'react';
import styled from 'styled-components';

const LeftSection = () => {
  return (
    <Ul>
      <Li>주문 조회</Li>
    </Ul>
  );
};

const Ul = styled.ul`
  flex: 1 1 14%;
  padding: 1rem;
  list-style: none;
`;
const Li = styled.li`
  margin-bottom: 0.5rem;
  cursor: pointer;
`;

export default LeftSection;
