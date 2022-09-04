import React, { useEffect, useState } from 'react';
import { get } from '../../../api/api';
import { Container, Table, Td, SmallSpan, BoldDiv, Button } from './OrderTable.style';

const OrderTable = () => {
  const [order, setOrder] = useState([]);

  const getOrderList = async () => {
    const res = await get();
    setOrder(res.products);
  };

  useEffect(() => {
    getOrderList();
  }, []);

  return (
    <Container>
      <Table>
        <tbody>
          {order.map(({ id, 주문번호, url, name, salesList, date, price }) => (
            <tr key={id}>
              <Td>
                <img src={url} alt="productImage" style={{ width: '100px', height: '100px' }} />
              </Td>
              <Td>
                <BoldDiv>{name}</BoldDiv>
                <div>
                  <SmallSpan>수량 : {salesList[0].quantity} | </SmallSpan>
                  <SmallSpan>옵션 : {salesList[0].title}</SmallSpan>
                </div>
                <div>
                  <SmallSpan>{price}원 | </SmallSpan>
                  <SmallSpan>{date}</SmallSpan>
                </div>
              </Td>
              <Td>배송중</Td>
              <Td>
                <div>
                  <SmallSpan>주문번호</SmallSpan>
                </div>
                <div>
                  <SmallSpan>{주문번호}</SmallSpan>
                </div>
                <Button>리뷰쓰기</Button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderTable;
