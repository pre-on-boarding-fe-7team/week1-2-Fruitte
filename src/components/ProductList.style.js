import styled from 'styled-components';

export const Container = styled.section`
  max-width: 1100px;
  height: 600px;
  margin: 0 auto;
`;

export const Ol = styled.ol`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
`;

export const Li = styled.li`
  @media only screen and (min-width: 768px) {
    width: 24%;
  }
  width: 48%;
  margin: 0.2rem 0.2rem 1rem 0.2rem;
`;

export const Title = styled.h1`
  margin: 1rem auto 1rem auto;
`;

export const Img = styled.img`
  width: 100%;
  cursor: pointer;
`;

export const Price = styled.span`
  font-size: 1.1rem;
  margin-right: 0.5rem;
`;

export const SalePrice = styled(Price)`
  font-size: 1rem;
  color: gray;
  text-decoration: line-through;
`;