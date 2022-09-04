import styled from 'styled-components';

export const Headers = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  padding: 0 2rem;
  box-sizing: border-box;
  background: #fff;
  z-index: 10;
  @media (max-width: 768px) {
    padding: 0;
    flex-direction: column;
    justify-content: space-around;
  }
`;

export const InnerHeader = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: center;
    height: 3rem;
    border-bottom: 1px solid ${props => props.theme.colors.yellowgreen};
  }
`;

export const Img = styled.img`
  width: 12rem;
  @media (max-width: 900px) {
    & {
      width: 8rem;
    }
  }
`;

export const GnbDiv = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: max-content;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    & {
      position: static;
      left: none;
      transform: none;
      height: 2rem;
      overflow-x: scroll;
    }
  }
  @media (max-width: 435px) {
    & {
      width: 100%;
    }
  }
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  list-style: none;
  padding-right: 12px;
  color: rgb(33 33 33 / 60%);

  &:last-child {
    padding-right: 0;
  }
  a {
    position: relative;
    display: flex;
    height: 100%;
    align-items: center;
    justfy-content: center;
    text-decoration: none;
    color: rgb(33 33 33 / 60%);

    &:hover {
      color: ${props => props.theme.colors.green};
    }
  }

  a.active {
    color: ${props => props.theme.colors.green};
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 1px;
      bottom: 2rem;
      left: 0;
      border-bottom: 1px solid ${props => props.theme.colors.green};
    }
  }

  @media (max-width: 900px) {
    & {
      font-size: 1rem;
      flex: none;
    }
  }
`;

export const UlSign = styled.ul`
  display: flex;
  @media (max-width: 768px) {
    position: absolute;
    right: 2%;
    font-size: 1rem;
  }
`;

export const LiSign = styled.li`
  list-style: none;
  padding: 0 4px;
  font-size: 14px;
  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.65);
  }
  a.active {
    border-bottom: 1px solid ${props => props.theme.colors.brwon};
  }
`;
