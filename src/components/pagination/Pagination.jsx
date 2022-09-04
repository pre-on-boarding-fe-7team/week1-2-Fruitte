import React from 'react';
import { Button } from './Pagination.style';

function Pagination({ totalPage, page, handleSetPage }) {
  return (
    <>
      <Button onClick={() => handleSetPage(page - 1)} disabled={page === 1}>
        왼쪽
      </Button>
      {Array(totalPage)
        .fill()
        .map((_, i) => (
          <Button key={i + 1} onClick={() => handleSetPage(i + 1)} clicked={page === i + 1}>
            {i + 1}
          </Button>
        ))}
      <Button onClick={() => handleSetPage(page + 1)} disabled={page === totalPage}>
        오른쪽
      </Button>
    </>
  );
}

export default Pagination;
