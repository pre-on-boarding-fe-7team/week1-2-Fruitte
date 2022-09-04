import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { get } from '../api/api';
import Pagination from './pagination/Pagination';
import {
  IconContainer,
  Container,
  Img,
  Li,
  Ol,
  Price,
  SalePrice,
  Title,
  Icon,
  InfoContainer,
  BEST,
  SALE,
  ImgWrapper,
  DescriptionContainer,
} from './ProductList.style';

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
            <ImgWrapper>
              <Img src={product.images} alt="이미지입니다." />
              <DescriptionContainer>
                <p>{product.detail}</p>
              </DescriptionContainer>
            </ImgWrapper>
            <InfoContainer>
              <Title>{product.name}</Title>
              <div>
                <Price>{moneyUnit(product.price)}원</Price>
                <SalePrice>{moneyUnit(product.salePrice)}원</SalePrice>
              </div>
              <IconContainer>
                <SALE>SALE</SALE>
                {product.isMD && <Icon>MD</Icon>}
                {product.isBest && <BEST>BEST</BEST>}
              </IconContainer>
            </InfoContainer>
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
