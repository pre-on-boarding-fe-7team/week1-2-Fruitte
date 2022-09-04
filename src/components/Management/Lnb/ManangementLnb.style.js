import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  width: 16%;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    & {
      width: 100%;
    }
  }
`;

export const Li = styled.li`
  list-style: none;
  margin: 0;
  padding: 20px 0;

  span {
    border-bottom: 2px solid #90b77d;
  }
`;
