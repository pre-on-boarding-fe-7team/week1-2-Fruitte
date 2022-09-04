import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding: 9px 4px;

  &:last-child {
    border: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 0;
  padding: 0;
  margin: 0;
  background: none;
  border: 1px solid #119411;
  border-radius: 4px;
  font-size: 18px;
  color: #119411;
  cursor: pointer;

  & + button {
    margin-left: 4px;
  }
`;

export const DeleteButton = styled(Button)`
  border-color: #101010;
  color: #101010;
`;

export const Img = styled.img`
  width: 40px;
  border-radius: 50%;
`;

export const SpanWrap = styled.span`
  display: flex;
  align-items: center;

  span {
    margin: 0 8px;
  }
`;
