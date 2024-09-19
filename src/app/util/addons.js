import React from 'react';
import ProductCard from '../components/card/ProductCard';

const products = [
  {
    image: 'path/to/image.jpg',
    title: 'Product 1',
    price: 19.99,
    description: 'This is a product description.',
    addons: [
      { name: 'Extra Cheese', price: 1.50 },
      { name: 'Bacon', price: 2.00 },
    ],
    onAddToCart: (item) => console.log('Added to cart:', item),
  },
  // other products
];

const ProductList = () => (
  <div className="flex flex-wrap gap-4">
    {products.map((product, index) => (
      <ProductCard key={index} {...product} />
    ))}
  </div>
);

export default ProductList;
