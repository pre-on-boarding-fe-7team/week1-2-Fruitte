import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { get } from '../api/api';
import Pagination from './pagination/Pagination';
import { Container, Img, Li, Ol, Price, SalePrice, Title } from './ProductList.style';

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

  const moneyUnit = price => {
    return Number(price).toLocaleString('ko-KR');
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
            <Title>{product.name}</Title>
            <Price>{moneyUnit(product.price)}원</Price>
            <SalePrice>{moneyUnit(product.salePrice)}원</SalePrice>
          </Li>
        ))}
      </Ol>
      <div>
        <Pagination
          totalPage={Math.ceil(products.length / LIMIT)}
          page={page}
          handleSetPage={handleSetPage}
        />
      </div>
    </Container>
  );
}

export default ProductsList;
