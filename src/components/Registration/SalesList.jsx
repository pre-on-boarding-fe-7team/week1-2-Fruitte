import { MdDelete } from 'react-icons/md';

import Sales from './Sales';
import { Button, Container, Left, Right } from './SalesList.style';

const SalesList = ({ list, changeHandler, deleteHandler }) => {
  return list.map(item => (
    <Container key={item.index}>
      <Left>
        <Sales {...item} changeHandler={changeHandler(item.index)} />
      </Left>
      <Right>
        <Button type="button" onClick={() => deleteHandler(item.index)}>
          <MdDelete size="20" color="#483838" />
        </Button>
      </Right>
    </Container>
  ));
};

export default SalesList;
