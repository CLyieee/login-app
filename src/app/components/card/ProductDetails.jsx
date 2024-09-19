import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { image, title, price, description, addons } = state || {};
  const [selectedAddons, setSelectedAddons] = useState([]);

  const handleAddToCart = () => {
    if (selectedAddons.length === 0) {
      toast.error('Please select at least one addon before adding to cart.');
      return;
    }

    const cartItem = {
      title,
      price,
      qty: 1,
      addons: selectedAddons,
    };
    // Add cartItem to your cart state or context here
    toast.success(`${title} added to cart with selected addons!`);
    navigate('/'); // Redirect to home page or cart page
  };

  const handleAddonChange = (addon) => {
    setSelectedAddons((prevSelected) =>
      prevSelected.includes(addon)
        ? prevSelected.filter((item) => item !== addon)
        : [...prevSelected, addon]
    );
  };

  if (!state) {
    return <div className="p-4">No product details available</div>;
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <button
          className="text-blue-500 hover:underline"
          onClick={() => navigate(-1)} // Go back to previous page
        >
          &larr; Back
        </button>
        <button
          className="text-blue-500 hover:underline"
          onClick={() => navigate('/')} // Redirect to home page
        >
          X
        </button>
      </div>
      <img src={image} alt={title} className="w-full h-60 object-cover rounded-lg" />
      <h1 className="text-2xl font-bold mt-4">{title}</h1>
      <p className="text-lg font-semibold text-gray-900">{price}</p>
      {description && <p className="text-gray-600 mt-2">{description}</p>}

      <h2 className="text-xl font-bold mt-6">Available Addons</h2>
      <div className="mt-4 max-h-60 overflow-y-auto">
        {addons.map((addon, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <label className="flex items-center">
              <input
                type="checkbox"
                value={addon.name}
                checked={selectedAddons.includes(addon)}
                onChange={() => handleAddonChange(addon)}
                className="mr-2"
              />
              {addon.name}
            </label>
            <span>${addon.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <button
        className="w-full bg-blue-500 text-white text-lg py-2 rounded-lg mt-6 hover:bg-blue-600"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
