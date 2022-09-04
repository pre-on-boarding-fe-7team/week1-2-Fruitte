import React, { useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { Container, Table, Td, SmallSpan, BoldDiv, Button } from './OrderTable.style';

const OrderTable = () => {
  // useEffect(()=>{

  // })

  const data = Array(7)
    .fill()
    .map(() => ({
      num: faker.random.numeric(5),
      image: faker.image.cats(70, 70, true),
      name: faker.name.fullName(),
      quantity: faker.random.numeric(1),
      option: faker.random.numeric(1),
      date: `${new Date().getFullYear()}-${new Date().getMonth() + 1}`,
      price: faker.commerce.price(1000, 80000, 0),
    }));

  return (
    <Container>
      <Table>
        <tbody>
          {data.map(({ num, image, name, quantity, option, date, price }) => (
            <tr key={num}>
              <Td>
                <img src={image} alt="productImage" />
              </Td>
              <Td>
                <BoldDiv>{name}</BoldDiv>
                <div>
                  <SmallSpan>수량 : {quantity} | </SmallSpan>
                  <SmallSpan>옵션 : {option} kg</SmallSpan>
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
                  <SmallSpan>{num}</SmallSpan>
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
