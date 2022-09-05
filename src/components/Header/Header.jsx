import { Link, useLocation } from 'react-router-dom';

import { ROUTE } from '../../common/utils/constant';
import {
  Headers,
  InnerHeader,
  Img,
  GnbDiv,
  Ul,
  Li,
  UlSign,
  LiSign,
  DummyHeaders,
} from './Header.style';

export default function Header() {
  const pathName = useLocation().pathname;
  const pathRoute = pathName.split('/')[1];

  return (
    <>
      <Headers>
        <InnerHeader>
          <Link to={ROUTE.MAIN}>
            <Img src="https://cdn.imweb.me/thumbnail/20210215/9c484dd3f6e7f.jpg" alt="로고" />
          </Link>
          <UlSign>
            <LiSign>
              <Link to={ROUTE.MY_PAGE} className={`${pathRoute === 'mypage' ? 'active' : ''}`}>
                Mypage
              </Link>
            </LiSign>
            <LiSign>
              <Link to={ROUTE.MANAGE} className={`${pathRoute === 'manage' ? 'active' : ''}`}>
                Manage
              </Link>
            </LiSign>
          </UlSign>
        </InnerHeader>

        <GnbDiv>
          <Ul>
            <Li>FRUITTE</Li>
            <Li>FRUIT NOW</Li>
            <Li>
              <Link to={ROUTE.MAIN} className={`${pathRoute === '' ? 'active' : ''}`}>
                FRUIT STORE
              </Link>
            </Li>
            <Li>FRUIT PLAY</Li>
            <Li>ABOUT US</Li>
          </Ul>
        </GnbDiv>
      </Headers>
      <DummyHeaders />
    </>
  );
}
