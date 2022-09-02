import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { Li, Img } from './ManagementProduct.style';

export default function ManagementProduct({ id, name, images, date, show, productDelete }) {
  const [newShow, setNewShow] = useState(show);

  const handleImage = () => {
    const image = images[0].url;
    return image;
  };

  const handleShow = prev => {
    setNewShow(prev => !prev);
  };

  const handleDelete = id => {
    productDelete(id);
  };

  return (
    <Li>
      <span>{id}</span>
      <span>{name}</span>
      <Img src={handleImage()} alt="이미지" />
      <button type="button" onClick={() => handleDelete(id)}>
        <MdDelete />
      </button>
      <button onClick={() => handleShow(show)}>{newShow ? '노출' : '제거'}</button>
      <span>{date}</span>
    </Li>
  );
}
