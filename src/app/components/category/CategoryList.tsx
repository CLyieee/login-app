import React from 'react';
import CategoryCard from './CategoryCard'; // Adjust the path if necessary

const categories = [
  {
    image: 'https://via.placeholder.com/150',
    title: 'Supermarket',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Pharmacy',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Convenience',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Bakery',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Restaurant',
  },
  {
    image: 'https://via.placeholder.com/150',
    title: 'Desserts',
  },
  // Add more categories as needed
];

const CategoryList = () => {
  return (
    <div className="flex overflow-x-auto p-4 space-x-4 scrollbar-hidden">
      {categories.map((category, index) => (
        <CategoryCard
          key={index}
          image={category.image}
          title={category.title}
        />
      ))}
    </div>
  );
};

export default CategoryList;
