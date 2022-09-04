import React from 'react';
import LeftSection from './LeftSection/LeftSection';
import MyInfo from './MyInfo/MyInfo';
import OrderTable from './OrderTable/OrderTable';
import { HeaderDiv, Section, Container, RightSection, H2 } from './OrderDetail.style';

const OrderDetail = () => {
  return (
    <Section>
      <HeaderDiv>header~~~</HeaderDiv>
      <Container>
        <LeftSection />
        <RightSection>
          <MyInfo />
          <H2>주문 조회</H2>
          <OrderTable />
        </RightSection>
      </Container>
      <HeaderDiv>footer~~~</HeaderDiv>
    </Section>
  );
};

export default OrderDetail;
