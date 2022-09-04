import { useState } from 'react';
import { IoTrashBin } from 'react-icons/io5';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import {
  Li,
  Img,
  Button,
  TextWrap,
  DeleteButton,
  SpanWrap,
  DateSpan,
  Span,
  SpanLeftWrap,
} from './ManagementProduct.style';

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

  const sliceDate = date => {
    return date.slice(0, 16);
  };
  return (
    <Li>
      <SpanLeftWrap>
        <Img src={handleImage()} alt="이미지" />
        <TextWrap>
          <DateSpan>{sliceDate(date)}</DateSpan>
          <Span>{name}</Span>
        </TextWrap>
      </SpanLeftWrap>
      <SpanWrap>
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
