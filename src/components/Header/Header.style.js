import styled from 'styled-components';

export const Headers = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 90px;
  padding: 0 30px;
  box-sizing: border-box;
  background: #ffffff;
`;

export const Img = styled.img`
  width: 12rem;
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;
  position: absolute;
  width: max-content;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  height: 100%;
  list-style: none;
  padding: 0 12px;
  color: rgba(0, 0, 0, 0.65);

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.65);
  }
`;

export const UlSign = styled.ul`
  display: flex;
`;

export const LiSign = styled.li`
  list-style: none;
  padding: 0 4px;
  font-size: 14px;
`;
