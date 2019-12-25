import React from 'react';

import ProductCard from '../product-card';

const ProductsFeed = ({ products }) => {
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsFeed;
