import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/navigation/Sidebar'; // Adjust path if necessary

const MainLayout = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    alert('Proceeding to checkout');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-7">
        <Sidebar
          cart={cart}
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          onCheckout={handleCheckout}
        />
      </div>
      
      <main className="flex-grow bg-white p-0 sm:p-4 w-full">
        {children}
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
