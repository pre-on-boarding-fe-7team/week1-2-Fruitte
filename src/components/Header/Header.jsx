import { Link } from 'react-router-dom';
import { GrMenu } from 'react-icons/gr';
import { Headers, Img, Ul, Li, UlSign, LiSign } from './Header.style';

export default function Header() {
  return (
    <Headers>
      <Img src="https://cdn.imweb.me/thumbnail/20210215/9c484dd3f6e7f.jpg" alt="로고" />

      <GrMenu />
      <Ul>
        <Li>FRUITTE</Li>
        <Li>FRUIT NOW</Li>
        <Li>
          <Link to="/">FRUIT STORE</Link>
        </Li>
        <Li>FRUIT PLAY</Li>
        <Li>ABOUT US</Li>
      </Ul>

      <UlSign>
        <LiSign>Mypage</LiSign>
        <LiSign>Manage</LiSign>
      </UlSign>
    </Headers>
  );
}
