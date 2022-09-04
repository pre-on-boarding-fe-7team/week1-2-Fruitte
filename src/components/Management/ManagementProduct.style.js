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

export const Img = styled.img`
  width: 3rem;
  border-radius: 50%;
`;

export const TextWrap = styled.span`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 8px;
  padding: 4px 0;
`;

export const DateSpan = styled.span`
  position: absolute;
  top: -0.2rem;
  font-size: 0.8rem;
  color: #90b77d;
`;

export const Span = styled.span`
  margin-top: 0.6rem;
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
  border: 1px solid #42855b;
  border-radius: 4px;
  font-size: 18px;
  color: #42855b;
  cursor: pointer;

  & + button {
    margin-left: 4px;
  }
`;

export const DeleteButton = styled(Button)`
  border-color: #483838;
  color: #483838;
`;

export const SpanLeftWrap = styled.span`
  display: flex;
  align-items: center;
`;

export const SpanWrap = styled.span`
  display: flex;
  align-items: center;
`;
