import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
  padding: 30px;
  height: fit-content;
  background: #f9f9f9;
  border-radius: 10px;
  margin: 0;
`;

export const Error = styled.span`
  margin-left: 5px;
  font-size: 14px;
  color: red;
`;

export const Button = styled.button`
  padding: 10px;
  & + button {
    margin-left: 4px;
  }
`;

export const Label = styled.label`
  line-height: 1.5;
  font-size: 18px;
  width: 100%;
  margin-bottom: 5px;
`;

export const Confirm = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #42855b;
  color: white;
  & + button {
    margin-left: 4px;
  }
`;
export const Cancel = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #90b77d;
  color: white;
  & + button {
    margin-left: 4px;
  }
`;

export const Input = styled.input`
  width: 100%;
  margin-bottom: 5px;
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

export const Textarea = styled.textarea`
  width: 100%;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
  border: solid 1.6px #444;
  &:focus {
    outline: none;
    border: solid 1.6px #42855b;
  }
`;
