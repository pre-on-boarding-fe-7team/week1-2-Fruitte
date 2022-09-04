import styled from 'styled-components';

export const Title = styled.div`
  flex: 0 0 40%;
  max-width: 40%;
  padding-right: 20px;
  //   margin-right: 4px;
`;
export const Subject = styled.div`
  flex: 0 0 30%;
  max-width: 30%;
  dispay: inline-block;
  //   margin-right: 4px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  border: 1px solid #efefef;
  border-radius: 10px;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: none;
    border: 1px solid #42855b;
  }
`;
