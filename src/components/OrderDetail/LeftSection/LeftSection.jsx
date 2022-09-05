import React from 'react';
import styled from 'styled-components';

const LeftSection = () => {
  return (
    <Ul>
      <Li>
        <span>주문 조회</span>
      </Li>
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
  span {
    border-bottom: 2px solid ${props => props.theme.colors.lightgreen};
  }
`;

export default LeftSection;
