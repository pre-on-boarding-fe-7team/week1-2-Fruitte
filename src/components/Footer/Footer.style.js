import styled from 'styled-components';

export const Footers = styled.footer`
  position: relative;
  background: #fff;
  @media (max-width: 900x) {
    padding: 0;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const TopFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eee;
  padding: 0 20px;
`;

export const InnerFooter = styled.div`
  max-width: 1100px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(33 33 33 / 60%);
  margin: 2rem 0;
  border-top: 1px solid #d2d4d9;
  border-bottom: 1px solid #d2d4d9;
  padding: 1.5rem 0;
  gap: 8rem;
  color: #333;
  & > div {
    flex: 1;
    display: flex;
    flex-direction: column;

    h4 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    strong {
      display: flex;
      margin-bottom: 0.8rem;
      font-size: 1rem;
      text-decoration: underline;
    }
    p {
      font-size: 0.9rem;
      line-height: 1.4rem;
      font-weight: lighter;
    }
    u {
      display: block;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }
    div:first-child {
      margin-bottom: 2.4rem;
    }
  }

  & > ul {
    flex: 1;
    font-size: 0.9rem;
    line-height: 1.4rem;
    color: rgba(64, 64, 64, 0.7);
    li {
      margin: 0.4rem 0;
      padding: 0.4rem 0;
      a {
        color: rgba(64, 64, 64, 0.7);
        text-decoration: none;

        &:hover {
          color: ${props => props.theme.colors.green};
        }
      }
    }
  }

  @media (max-width: 900px) {
    gap: 4rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;

    & > div {
      margin: 1rem 0;
      h4 {
        font-size: 1.2rem;
      }
      u {
        font-size: 0.8rem;
        margin-bottom: 0.7rem;
      }
      div:first-child {
        margin-bottom: 1rem;
      }
    }
    & > ul {
      font-size: 0.8rem;
      li {
        margin: 0;
        padding: 0.2rem 0;
      }
    }
  }
`;

export const BootmFooter = styled.div`
  display: flex;
  flex-direction: column;
  color: #101010;
  font-size: 0.8rem;
  line-height: 1.4rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: lighter;
  padding: 2rem 0;

  ul {
    display: flex;
    gap: 0.6rem;
    font-size: 1.2rem;
  }

  p {
    margin: 0.4rem 0;
  }

  @media (max-width: 768px) {
    ul {
      font-size: 1rem;
    }
  }
`;

export const Copyright = styled.p`
  margin: 0 !important;
  font-size: 0.6rem;
`;
