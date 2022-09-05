import styled from 'styled-components';

export const ManagementWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 90px);
  background: #f3f3f3;
  padding: 60px 20px;

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      justify-content: flex-start;
      padding-top: 0;
    }
  }
`;
export const Container = styled.div`
  display: flex;
  max-width: 1100px;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    & {
      flex-direction: column;
    }
  }
`;

export const ProductList = styled.div`
  display: flex;
  flex: 1;
  padding: 30px;
  height: fit-content;
  background: #fff;
  border-radius: 10px;
  margin: 0;
  ul {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
  }

  @media (max-width: 768px) {
    & {
      padding: 1rem;
    }
  }
`;
