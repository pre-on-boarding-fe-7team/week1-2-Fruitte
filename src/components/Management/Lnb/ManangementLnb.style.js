import styled from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
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
  padding: 1rem 0;

  span {
    color: #404040;
    border-bottom: 2px solid ${props => props.theme.colors.lightgreen};
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
  }
  a {
    text-decoration: none;
    color: #404040;
    background: ${props => props.theme.colors.lightgreen};
    padding: 0.6rem 1.2rem;
    color: #fff;
    border-radius: 0.4rem;
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  &.button {
    position: relative;

    @media (max-width: 768px) {
      a {
        position: absolute;
        right: 0;
        top: -1.6rem;
      }
    }
  }
`;
