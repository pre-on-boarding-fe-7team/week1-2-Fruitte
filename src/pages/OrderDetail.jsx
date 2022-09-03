import React from 'react';
import LeftSection from '../components/LeftSection/LeftSection';
import MyInfo from '../components/myInfo/MyInfo';
import OrderCheck from '../components/orderCheck/OrderCheck';
import { Container, RightSection } from './OrderDetail.style';

const OrderDetail = () => {
  //스토어 상품 주문 내역확인 (주문 번호, 상품명, 주문 수량, 주문 옵션)
  return (
    <>
      <header style={{ backgroundColor: 'pink' }}>Header---</header>
      <Container>
        <LeftSection />
        <RightSection>
          <MyInfo />
          <h3>주문 조회</h3>
          <OrderCheck />
        </RightSection>
      </Container>
      <footer style={{ backgroundColor: 'pink' }}>Footer---</footer>
    </>
  );
};

export default OrderDetail;
