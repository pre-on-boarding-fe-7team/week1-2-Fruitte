import styled from 'styled-components';

export const Left = styled.div`
  flex: 0 0 90%;
  max-width: 90%;
  display: flex;
  flex-wrap: wrap;

  & input {
    width: 90%;
  }
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
