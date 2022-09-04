import { useState, useEffect } from 'react';
import ManagementProduct from '../../components/Management/ManagementProduct';
import ManagementLnb from '../../components/Management/Lnb/ManagementLnb';
import { ManagementWrapper, Container, ProductList } from './Management.style';

export default function Management() {
  const [manageList, setManageList] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    setIsUpdated(false);
    fetch('http://localhost:8000/products/', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setManageList(data);
      });
  }, [isUpdated]);

  const handleDelete = id => {
    fetch(`http://localhost:8000/products/${id}`, {
      method: 'DELETE',
    }).then(res => {
      setIsUpdated(true);
    });
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
                  images={product.images}
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
