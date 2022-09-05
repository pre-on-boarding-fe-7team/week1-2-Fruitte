import { Link } from 'react-router-dom';

import { Ul, Li } from './ManangementLnb.style';

export default function ManagementLnb() {
  return (
    <Ul>
      <Li>
        <span>상품 목록 관리</span>
      </Li>
      <Li className="button">
        <Link to="/regist">등록하기</Link>
      </Li>
    </Ul>
  );
}
