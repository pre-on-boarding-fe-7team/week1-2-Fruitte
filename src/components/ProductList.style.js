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

export const InfoContainer = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  gap: 0.5rem;
`;

export const Title = styled.h1``;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  background-color: black;
  transition: all 0.2s ease-in;
  transform: translateY(1rem);
  color: white;
  padding: 1rem;
`;

export const ImgWrapper = styled.div`
  cursor: pointer;
  margin-bottom: 1rem;
  position: relative;

  &:hover {
    ${DescriptionContainer} {
      opacity: 0.6;
      transform: translateY(0px);
    }
  }
`;

export const Img = styled.img`
  width: 100%;
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

export const IconContainer = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  padding: 0.3rem;
  margin-right: 0.3rem;
  border: 1px solid gray;
  font-size: 0.8rem;
`;

export const SALE = styled(Icon)`
  border: 1px solid tomato;
  background-color: tomato;
  color: #fff;
`;

export const BEST = styled(Icon)`
  color: tomato;
`;
