import { useState } from 'react';
import { IoTrashBin } from 'react-icons/io5';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Li, Img, Button, DeleteButton, SpanWrap } from './ManagementProduct.style';

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
      </SpanWrap>
      <SpanWrap>
        <span>{date}</span>
        <Button onClick={() => handleProductShow(id)}>
          {updateShow ? <IoMdEye /> : <IoMdEyeOff />}
        </Button>
        <DeleteButton type="button" onClick={() => handleProductDelete(id)}>
          <IoTrashBin />
        </DeleteButton>
      </SpanWrap>
    </Li>
  );
}
