import React from 'react';

const CartItemCard = ({ title, price, qty, color }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg mb-4 relative">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">Quantity: {qty}</p>
      </div>
      <p className="text-lg font-bold text-gray-900">{price}</p>

      {/* Side line */}
      <div
        className="absolute top-0 right-0 h-full w-2 rounded-bl-lg"
        style={{ backgroundColor: color }}
      />
    </div>
  );
};

export default CartItemCard;
