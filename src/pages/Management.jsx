import { useState, useEffect } from 'react';
import ManagementProduct from '../components/Management/ManagementProduct';

export default function Management() {
  const [manageList, setManageList] = useState([]);
  useEffect(() => {
    fetch('/data/managementData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setManageList(data);
      });
  }, []);

  const productDelete = id => {
    setManageList(manageList.filter(product => product.id !== id));
  };

  return (
    <ul>
      {manageList.map(product => {
        return (
          <ManagementProduct
            key={product.id}
            id={product.id}
            name={product.name}
            images={product.images}
            date={product.date}
            show={product.show}
            productDelete={productDelete}
          />
        );
      })}
    </ul>
  );
}
