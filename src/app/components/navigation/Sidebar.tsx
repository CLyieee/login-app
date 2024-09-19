import React from 'react';
import { FiX } from 'react-icons/fi';
import { CiShoppingCart } from 'react-icons/ci';
import CartItemCard from '../card/cartCard'; // Adjust path if necessary

const Sidebar = ({ cart, isOpen, toggleSidebar, onCheckout }) => {
  return (
    <div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white text-neutral-900 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out z-40`}
        style={{ height: '100vh' }} // Ensure the sidebar covers the full viewport height
      >
        <div className="p-4 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">My Cart</h2>
          <div className="flex-1 overflow-y-auto scrollbar-hidden">
            {cart.length === 0 ? (
              <p className="text-gray-600">Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <CartItemCard
                  key={index}
                  title={item.title}
                  price={item.price}
                  qty={item.qty}
                  color="#4CAF50" // Example color; you can pass different colors as needed
                />
              ))
            )}
          </div>
          {/* Checkout Button */}
          <button
            onClick={onCheckout}
            className="mb-[3rem] w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Close Button Outside Sidebar */}
      {isOpen && (
        <button
          className="fixed top-4 right-4 p-2 z-50 bg-transparent text-white hover:text-gray-300"
          onClick={toggleSidebar}
        >
          <FiX size={24} />
        </button>
      )}

      {/* Sidebar Toggle Button */}
      {!isOpen && (
        <button
          className="fixed top-4 left-4 p-2 z-40 bg-transparent text-gray-800 hover:text-gray-600 focus:outline-none"
          onClick={toggleSidebar}
        >
          <CiShoppingCart size={24} />
        </button>
      )}
    </div>
  );
};

export default Sidebar;
