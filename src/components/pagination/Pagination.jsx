import React from 'react';
import { Button, Container } from './Pagination.style';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function Pagination({ totalPage, page, handleSetPage }) {
  return (
    <Container>
      <Button onClick={() => handleSetPage(page - 1)} disabled={page === 1}>
        <AiOutlineArrowLeft />
      </Button>
      {Array(totalPage)
        .fill()
        .map((_, i) => (
          <Button key={i + 1} onClick={() => handleSetPage(i + 1)} clicked={page === i + 1}>
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => handleSetPage(page + 1)} disabled={page === totalPage}>
        <AiOutlineArrowRight />
      </Button>
    </Container>
  );
}

export default Pagination;
