import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { get } from '../api/api';

function ProductsList() {
  const [products, setProducts] = useState([]);
  const getProductsList = async () => {
    const res = await get('');
    console.info(res);
    setProducts(res);
  };
  useEffect(() => {
    getProductsList();
  }, []);
  return (
    <ul>
      {products?.map((product, index) => (
        <li key={index}>{product.detail}</li>
      ))}
    </ul>
  );
}

export default ProductsList;
