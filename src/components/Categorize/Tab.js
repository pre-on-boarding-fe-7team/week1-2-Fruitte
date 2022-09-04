import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Nav } from 'react-bootstrap';
import DetailInfo from '../Categorize/detailInfo';
import Review from '../Categorize/review';
import Question from '../Categorize/question';
function Tab() {
  let [탭, 탭변경] = useState(0);

  return (
    <Tabs>
      <Nav variant="tabs" defaultActiveKey="link0" className="nav">
        <Nav.Item className="navItems">
          <Nav.Link
            className="navItem"
            eventKey="link0"
            onClick={() => {
              탭변경(0);
            }}
          >
            상세정보
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItems">
          <Nav.Link
            className="navItem"
            eventKey="link1"
            onClick={() => {
              탭변경(1);
            }}
          >
            구매평
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="navItems">
          <Nav.Link
            className="navItem"
            eventKey="link2"
            onClick={() => {
              탭변경(2);
            }}
          >
            Q&A
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <>
        <Tabcontent 탭={탭} />
      </>
    </Tabs>
  );
}

function Tabcontent(props) {
  if (props.탭 === 0) {
    return <DetailInfo />;
  }
  if (props.탭 === 1) {
    return <Review />;
  }
  if (props.탭 === 2) {
    return <Question />;
  }
}
const Tabs = styled.div`
  max-width: 800px;
  margin: 0 auto;

  .nav {
    display: flex;
    justify-content: center;
    margin: 0 auto;
    width: 650px;
  }
  .navItem {
    padding: 20px 50px;
  }
`;

export default Tab;
