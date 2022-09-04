import styled from 'styled-components';

export const Container = styled.div`
  /* border: 2px solid red; */
  background-color: white;
  margin-top: 3rem;
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

export const Table = styled.table`
  /* border: 2px solid greenyellow; */
  width: 100%;
  text-align: center;
  border-collapse: collapse;
`;

export const Td = styled.td`
  @media (min-width: ${props => props.theme.size.mobile}) {
    & {
      display: ${props => (props.mo ? 'none' : null)};
      border-bottom: 1px solid ${props => props.theme.colors.yellowgreen};
      padding: 1.2rem;
      vertical-align: middle;
      width: ${props => (props.title ? '300px' : '130px')};
    }
  }

  @media (max-width: ${props => props.theme.size.mobile}) {
    & {
      display: ${props => (props.mo ? null : 'none')};
      border-bottom: 1px solid ${props => props.theme.colors.yellowgreen};
      padding: 1.2rem;
      vertical-align: middle;
    }
  }
`;

export const SmallSpan = styled.span`
  font-size: small;
`;

export const BoldDiv = styled.div`
  font-weight: bold;
  color: #483838;
`;

export const Button = styled.button`
  background-color: #90b77d;
  margin-top: 0.5rem;
  border-radius: 0.2rem;
  color: white;
`;
