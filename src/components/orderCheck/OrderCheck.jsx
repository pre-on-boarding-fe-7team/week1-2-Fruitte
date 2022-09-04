import React from 'react';
import { faker } from '@faker-js/faker';
import { Container, Table, Td } from './OrderCheck.style';

const OrderCheck = () => {
  // const columns = ['주문번호', '상품명', '수량', '옵션'];

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
        {/* <thead>
          <tr>
            {columns.map(column => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead> */}
        <tbody>
          {data.map(({ num, image, name, quantity, option, date, price }) => (
            <tr key={num}>
              <Td>
                <img src={image} alt="productImage" />
              </Td>
              <Td>
                <div>{name}</div>
                <div>
                  <span>수량 : {quantity} | </span>
                  <span>옵션 : {option} kg</span>
                </div>
                <div>
                  <span>{price}원 | </span>
                  <span>{date}</span>
                </div>
              </Td>
              <Td>배송중</Td>
              <Td>
                <div>주문번호</div>
                <div>{num}</div>
                <button>리뷰쓰기</button>
              </Td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default OrderCheck;
