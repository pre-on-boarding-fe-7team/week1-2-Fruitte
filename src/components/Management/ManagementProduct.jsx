import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Li, Img, Button, SpanWrap } from './ManagementProduct.style';

export default function ManagementProduct({ id, name, images, date, show, productDelete }) {
  const [updateShow, setUpdateShow] = useState(show);

  const handleImage = () => {
    const image = images[0].url;
    return image;
  };

  const handleProductShow = id => {
    setUpdateShow(prev => !prev);
  };

  const handleProductDelete = id => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      productDelete(id);
    }
  };

  return (
    <Li>
      <SpanWrap>
        <Img src={handleImage()} alt="이미지" />
        <span>{name}</span>
        <span>{date}</span>
      </SpanWrap>
      <SpanWrap>
        <Button type="button" onClick={() => handleProductDelete(id)}>
          <MdDelete />
        </Button>
        <Button onClick={() => handleProductShow(id)}>{updateShow ? '노출' : '제거'}</Button>
      </SpanWrap>
    </Li>
  );
}
