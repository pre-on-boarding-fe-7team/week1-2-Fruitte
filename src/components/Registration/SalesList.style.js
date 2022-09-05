import styled from 'styled-components';

export const Left = styled.div`
  flex: 0 0 90%;
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;
`;

export const Right = styled.div`
  flex: 0 0 10%;
  max-width: 10%;
`;

export const Button = styled.button`
  padding: 10px;
  border: 0;
  & + button {
    margin-left: 4px;
  }
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 4px;
  display: flex;
  flex-wrap: wrap;
`;
