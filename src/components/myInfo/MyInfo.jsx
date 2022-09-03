import React from 'react';
import { BsPersonCircle } from 'react-icons/bs';
import styled from 'styled-components';

const MyInfo = () => {
  return (
    <Container>
      <BsPersonCircle size="84" />
      <Info>
        <p>김유영 님 안녕하세요!</p>
        <p>누적 구매금액 : 0원</p>
      </Info>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  padding: 2rem;
  margin-bottom: 3rem;
`;
const Info = styled.div`
  margin-left: 1rem;
`;

export default MyInfo;
