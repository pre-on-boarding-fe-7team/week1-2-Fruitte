import React from 'react';

import { Container, Wrapper } from './Order.style';
import OrderForm from './OrderForm';

const Order = () => {
  return (
    <Container>
      <Wrapper>
        <OrderForm />
      </Wrapper>
    </Container>
  );
};

export default Order;
