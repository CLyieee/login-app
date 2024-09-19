import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ image, title, price, description, addons }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/product-details', {
      state: {
        image,
        title,
        price,
        description,
        addons,
      }
    });
  };

  return (
    <div
      className="relative bg-white shadow-lg rounded-lg overflow-hidden flex flex-col w-full sm:w-48 lg:w-56 sm:h-80 cursor-pointer"
      onClick={handleCardClick}
    >
      <img src={image} alt={title} className="w-full h-32 sm:h-40 object-cover" />
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-base font-semibold text-gray-800 truncate">{title}</h2>
          {description && <p className="text-gray-600 mt-1 text-xs">{description}</p>}
        </div>
        <p className="text-lg font-bold text-gray-900 mt-2">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
