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
  background: pink;
  padding: 10px;
  border: 0;

  & + button {
    margin-left: 4px;
  }
`;

export const Img = styled.img`
  width: 40px;
`;

export const SpanWrap = styled.span`
  display: flex;
  align-items: center;

  span {
    margin: 0 8px;
  }
`;
