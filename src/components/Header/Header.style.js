import styled from 'styled-components';

export const Headers = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 90px;
  padding: 0 30px;
  box-sizing: border-box;
`;

export const Img = styled.img`
  width: 12rem;
`;

export const Ul = styled.ul`
  display: flex;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
export const UlSign = styled.ul`
  display: flex;
`;

export const Li = styled.li`
  list-style: none;
  padding: 0 12px;
  color: rgba(0, 0, 0, 0.65);
`;

export const LiSign = styled.li`
  list-style: none;
  padding: 0 8px;
  font-size: 12px;
`;
