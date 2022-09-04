import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { get } from '../api/api';
import Pagination from './pagination/Pagination';
import { Container, Img, Li, Ol } from './ProductList.style';

const LIMIT = 10;

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const offest = (page - 1) * LIMIT;
  const getProductsList = async () => {
    const res = await get();
    setProducts(res);
  };

  const handleSetPage = page => {
    setPage(Number(page));
  };
  useEffect(() => {
    getProductsList();
  }, []);
  return (
    <Container>
      <Ol>
        {products?.slice(offest, offest + LIMIT).map((product, index) => (
          <Li key={product.id}>
            <Img src={product.images} alt="이미지입니다." />
          </Li>
        ))}
      </Ol>
      <div>
        <Pagination
          totalPage={Math.ceil(products.length / LIMIT)}
          page={page}
          handleSetPage={handleSetPage}
        ></Pagination>
      </div>
    </Container>
  );
}

export default ProductsList;
