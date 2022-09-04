import { useState, useEffect } from 'react';
import ManagementProduct from './ManagementProduct';
import ManagementLnb from './Lnb/ManagementLnb';
import { ManagementWrapper, Container, ProductList } from './Management.style';

export default function Management() {
  const [manageList, setManageList] = useState([]);
  useEffect(() => {
    fetch('/data/data.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setManageList(data.products);
      });
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
