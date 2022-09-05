import React from 'react';
import LeftSection from '../LeftSection/LeftSection';
import MyInfo from '../myInfo/MyInfo';
import OrderTable from '../OrderTable/OrderTable';
import { Container, RightSection, H2 } from './OrderDetail.style';

const OrderDetail = () => {
  //스토어 상품 주문 내역확인 (주문 번호, 상품명, 주문 수량, 주문 옵션)
  return (
    <>
      <Container>
        <LeftSection />
        <RightSection>
          <MyInfo />
          <H2>주문 조회</H2>
          <OrderTable />
        </RightSection>
      </Container>
      <footer style={{ backgroundColor: '#D2D79F' }}>Footer---</footer>
    </>
  );
};

export default OrderDetail;
