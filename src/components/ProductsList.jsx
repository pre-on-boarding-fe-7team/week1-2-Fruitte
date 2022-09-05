import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { PAGINATION_LIMIT, ROUTE } from '../common/utils/constant';
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
  Heart,
  Detail,
  StyledHeart,
  Likes,
  TotalCount,
  Total,
} from './ProductList.style';
import { useNavigate } from 'react-router-dom';

function ProductsList() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const offest = (page - 1) * PAGINATION_LIMIT;
  const getProductsList = async () => {
    const res = await get();
    setProducts(res.products);
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
      <Total>
        FRUITTE STORE <TotalCount>{products?.length}</TotalCount>
      </Total>
      <Ol>
        {products?.slice(offest, offest + PAGINATION_LIMIT).map((product, index) => (
          <Li key={product.id}>
            <ImgWrapper onClick={() => navigate(`${ROUTE.DETAIL}/${product.id - 1}`)}>
              <Img src={product.url} alt="이미지입니다." />
              <DescriptionContainer>
                <Detail>원산지: {product.from}</Detail>
                <Heart>
                  <StyledHeart />
                  <Likes>{product.likes}</Likes>
                </Heart>
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
          totalPage={Math.ceil(products.length / PAGINATION_LIMIT)}
          page={page}
          handleSetPage={handleSetPage}
        />
      </div>
    </Container>
  );
}

export default ProductsList;
