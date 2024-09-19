import React from 'react';

const CategoryCard = ({ image, title }) => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#F5F5F5] rounded-lg shadow-lg w-32 h-32 md:w-40 md:h-40 p-4 scrollbar-hidden">
      <div className="flex items-center justify-center h-20 w-20 md:h-24 md:w-24 mb-2">
        <img src={image} alt={title} className="object-contain h-full" />
      </div>
      <h3 className="text-center text-sm md:text-base font-semibold text-gray-800">{title}</h3>
    </div>
  );
};

export default CategoryCard;
