import { Input, Subject, Title } from './Sales.style';

const Sales = ({ changeHandler }) => (
  <>
    <Title>
      <Input type="text" name="title" placeholder="품목명" onChange={changeHandler} />
    </Title>
    <Subject>
      <Input type="number" name="price" min="1" placeholder="가격" onChange={changeHandler} />
    </Subject>
    <Subject>
      <Input type="number" name="quantity" min="1" placeholder="수량" onChange={changeHandler} />
    </Subject>
  </>
);

export default Sales;
