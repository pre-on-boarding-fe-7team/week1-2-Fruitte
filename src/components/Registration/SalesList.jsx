import styled from 'styled-components';
import Container from './Container';
import Sales from './Sales';

const Left = styled.div`
  flex: 0 0 90%;
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;

  & input {
    width: 90%;
  }
`;
const Right = styled.div`
  flex: 0 0 10%;
  max-width: 10%;
`;

const SalesList = ({ list, changeHandler, deleteHandler }) => {
  return list.map(item => (
    <Container key={item.index}>
      <Left>
        <Sales {...item} changeHandler={() => changeHandler(item.index)} />
      </Left>
      <Right>
        <button type="button" onClick={() => deleteHandler(item.index)}>
          삭제
        </button>
      </Right>
    </Container>
  ));
};

export default SalesList;
