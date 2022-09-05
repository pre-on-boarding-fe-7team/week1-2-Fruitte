import styled from 'styled-components';

export const Title = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  padding-right: 4px;
`;
export const Subject = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
  padding-right: 4px;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 10px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem #d2d79f;
  }
`;
