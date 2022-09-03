import React from 'react';
import styled from 'styled-components';

const LeftSection = () => {
  return (
    <Ul>
      <Li>주문 조회</Li>
      <Li>위시 리스트</Li>
      <Li>취소/교환/반품</Li>
      <Li>쿠폰</Li>
      <Li>1:1 문의</Li>
      <Li>정보 수정</Li>
      <Li>회원탈퇴</Li>
    </Ul>
  );
};

const Ul = styled.ul`
  flex: 1 1 15%;
  border: 2px solid green;
  padding: 1rem;
  list-style: none;
`;
const Li = styled.li`
  margin-bottom: 0.5rem;
`;

export default LeftSection;
