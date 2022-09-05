import { AiOutlineInstagram } from 'react-icons/ai';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiMicrodotblog } from 'react-icons/si';
import { Link } from 'react-router-dom';

import { Footers, TopFooter, BootmFooter, InnerFooter, Copyright } from './Footer.style';

export default function Footer() {
  return (
    <Footers>
      <TopFooter>
        <InnerFooter>
          <div>
            <h4>About Fruitte</h4>
            <strong>프루떼는</strong>
            <p>
              (프루떼는 프로젝트프룻의 새 이름입니다) 프루떼는 안전한 먹거리의 신념을 지키는 좋은
              농장을 발굴하고 소개하는 팜큐레이터입니다. 건강한 자연을 가까이에서 만날 수 있는
              팜큐레이션 서비스를 통하여 농장을 알고 누리고 맛보는 기쁨을 전합니다. 프루떼를
              경험하는 사람들의 일상에 풍요로움을 더하는 것이 우리가 지향하는 가치입니다.
            </p>
          </div>
          <div>
            <div>
              <u>문의안내</u>
              <p>
                카카오톡채널: 프루떼
                <br />
                (주중 9시~18시 채팅 상담 가능)
              </p>
            </div>
            <div>
              <u>무통장 입금 계좌안내</u>
              <p>국민은행 527837-01-004676 주식회사 로컬앤라이프</p>
            </div>
          </div>
          <ul>
            <li>FRUITTE</li>
            <li>FRUIT NOW</li>
            <li>
              <Link to="/">FRUIT STORE</Link>
            </li>
            <li>FRUIT PLAY</li>
            <li>ABOUT US</li>
          </ul>
        </InnerFooter>
      </TopFooter>
      <BootmFooter>
        <ul>
          <li>
            <AiOutlineInstagram />
          </li>
          <li>
            <RiKakaoTalkFill />
          </li>
          <li>
            <SiMicrodotblog />
          </li>
        </ul>
        <p>
          상호명: Local & Life Inc. | 대표: 홍인기 | 전화번호: 010-8828-0472
          <br />
          사업자번호: 625-81-01879 | 통신판매허가번호: 2020-서울동대문-1110
          <br />
          주소: 서울시 동대문구 회기로85 한국과학기술원 9호관 9402호
          <br />
          호스팅 제공자 : (주)아임웹
        </p>
        <p>이용약관&nbsp;&nbsp;&nbsp;&nbsp;개인정보처리방침</p>
        <Copyright>Copyright ⓒ 2022 프루떼-오늘도프룻해! All rights reserved.</Copyright>
      </BootmFooter>
    </Footers>
  );
}
