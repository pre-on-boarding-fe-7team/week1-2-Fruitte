import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100vh - 90px);
  background: #f3f3f3;
  padding: 60px 20px;
  margin-top: 90px;
  box-sizing: border-box;
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
`;
