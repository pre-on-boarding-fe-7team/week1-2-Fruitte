import styled from 'styled-components';

export const Button = styled.button`
  border: '1px solid';
  background-color: ${props => (props.clicked ? 'pink' : 'white')};
`;
