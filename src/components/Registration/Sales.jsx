import styled from 'styled-components';

const Title = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
`;
const Subject = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
`;

const Sales = ({ changeHandler }) => (
  <>
    <Title>
      <input type="text" name="title" placeholder="품목명" onChange={changeHandler} />
    </Title>
    <Subject>
      <input type="number" name="price" min="1" placeholder="가격" onChange={changeHandler} />
    </Subject>
    <Subject>
      <input type="number" name="quantity" min="1" placeholder="수량" onChange={changeHandler} />
    </Subject>
  </>
);

export default Sales;
