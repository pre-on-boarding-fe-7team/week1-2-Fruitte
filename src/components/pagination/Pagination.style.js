import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: '1px solid';
  height: 1.7rem;
  width: 1.7rem;
  font-size: 1.2rem;
  background-color: ${props => (props.clicked ? 'tomato' : 'white')};
  color: ${props => (props.clicked ? 'white' : 'black')};
`;
