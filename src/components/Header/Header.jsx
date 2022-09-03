import { Headers, Img, Ul, Li, UlSign, LiSign } from './Header.style';

export default function Header() {
  return (
    <Headers>
      <Img src="https://cdn.imweb.me/thumbnail/20210215/9c484dd3f6e7f.jpg" alt="로고" />

      <Ul>
        <Li>FRUITTE</Li>
        <Li>FRUIT NOW</Li>
        <Li>FRUIT STORE</Li>
        <Li>FRUIT PLAY</Li>
        <Li>ABOUT US</Li>
      </Ul>

      <UlSign>
        <LiSign>login</LiSign>
        <LiSign>join</LiSign>
      </UlSign>
    </Headers>
  );
}
