import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  padding 60px 100px 80px;
  height: fit-content;
  background: #fff;
  border-radius: 10px;
  margin: 0;
  margin: 0 auto;
  max-width: 768px;
  min-width: 460px;

  @media (max-width: 768px) {
    max-width: 460px;
    min-width: 240px;
    padding 60px 40px 80px;
  }

`;

export const Title = styled.h2`
  display: inline-block;
  margin-bottom: 42px;
  color: #333;
  font-size: 38px;
  font-weight: 300;
  line-height: 42px;
  border-bottom: 4px solid #90b77d;
`;

export const Container = styled.div`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  flex-wrap: wrap;
`;

export const Error = styled.span`
  margin-left: 5px;
  font-size: 12px;
  color: #d92550;
  width: 100%;
`;

export const Button = styled.button`
  padding: 10px;
  & + button {
    margin-left: 4px;
  }
`;

export const Label = styled.label`
  color: #495057;
  line-height: 1.5;
  display: inline-block;
  margin-bottom: 5px;
`;

export const Span = styled.span`
  color: #495057;
  line-height: 1.5;
  margin-bottom: 5px;
  margin-right: 10px;
`;

export const Buttons = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const Confirm = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #42855b;
  color: white;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 4px;
  }
`;

export const Cancel = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  border-radius: 10px;
  background-color: #90b77d;
  color: white;
  width: 49%;
  margin-left: 4px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 5px;
  padding: 10px;
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

export const Textarea = styled.textarea`
  width: 100%;
  margin-bottom: 5px;
  padding: 10px;
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
