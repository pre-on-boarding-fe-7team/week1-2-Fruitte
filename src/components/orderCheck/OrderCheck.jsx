import React from 'react';
import { faker } from '@faker-js/faker';
import { Table } from './OrderCheck.style';

//주문 내역이 없다면 '주문 내역이 없습니다.'

const OrderCheck = () => {
  const columns = ['주문번호', '    ', '상품명', '수량', '옵션'];

  const data = Array(5)
    .fill()
    .map(() => ({
      num: faker.random.numeric(5),
      image: faker.image.cats(100, 100, true),
      name: faker.name.fullName(),
      quantity: faker.random.numeric(1),
      option: faker.random.numeric(1),
    }));

  return (
    <Table>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(({ num, image, name, quantity, option }) => (
          <tr key={num}>
            <td>{num}</td>
            <td>
              <img src={image} alt="productImage" />
            </td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>{option} kg</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OrderCheck;
