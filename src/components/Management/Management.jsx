import { useState, useEffect } from 'react';

import { get } from '../../api/api';
import ManagementLnb from './Lnb/ManagementLnb';
import { ManagementWrapper, Container, ProductList } from './Management.style';
import ManagementProduct from './ManagementProduct';

export default function Management() {
  const [manageList, setManageList] = useState([]);
  const getProductsList = async () => {
    const res = await get();
    setManageList(res.products);
  };
  useEffect(() => {
    getProductsList();
  }, []);

  const handleDelete = id => {
    setManageList(manageList.filter(product => product.id !== id));
  };

  return (
    <ManagementWrapper>
      <Container>
        <ManagementLnb />
        <ProductList>
          <ul>
            {manageList.map(product => {
              return (
                <ManagementProduct
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  images={product.url}
                  date={product.date}
                  show={product.show}
                  productDelete={handleDelete}
                />
              );
            })}
          </ul>
        </ProductList>
      </Container>
    </ManagementWrapper>
  );
}
