import React from 'react';

const Summa = ({ products }) => {
  const summaArray = products.map(p => p.price);
  if (!summaArray || summaArray.length === 0) return null;
  const summa = summaArray.reduce((a, b) => a + b);
  return <div>summa: {summa}</div>;
};

export default Summa;
