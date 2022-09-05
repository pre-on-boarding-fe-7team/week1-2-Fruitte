import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 90px);
  background: #f3f3f3;
  padding: 60px 20px;
  margin-top: 90px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0px;
    background: #fff;
  }
`;
