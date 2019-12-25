import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div>
      <h4>{product.title}</h4>
      <p>kind: {product.kind}</p>
      <p>price: {product.price}</p>
    </div>
  );
};

export default ProductCard;
