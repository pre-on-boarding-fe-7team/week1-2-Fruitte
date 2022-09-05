import styled from 'styled-components';

export const Section = styled.section`
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: ${props => props.theme.size.pc};
  padding: 60px 20px;

  @media (max-width: ${props => props.theme.size.mobile}) {
    & {
      flex-direction: column;
      padding: 0px;
    }
  }
`;

export const RightSection = styled.div`
  flex: 1 1 86%;
  /* border: 2px solid red; */
  padding: 0 1rem 0 1rem;
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
`;
