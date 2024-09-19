import React, { useState } from 'react';
import MainLayout from '../layout/MainLayout'; // Adjust path if necessary
import CategoryCard from '../components/category/CategoryCard'; // Adjust path if necessary
import ProductCard from '../components/card/ProductCard'; // Adjust path if necessary
import Sidebar from '../components/navigation/Sidebar'; // Adjust path if necessary
import { cate } from '../util/config';

// Define the Product type
type Product = {
  image: string;
  title: string;
  price: string;
  description?: string;
};

const PosHome = () => {
  const [cart, setCart] = useState<Product[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(prevState => !prevState);
  };

  const handleCheckout = () => {
    // Implement checkout logic here
    alert('Proceeding to checkout');
  };

  const products = [
    { image: 'https://via.placeholder.com/150', title: 'Sample Product 1', price: '$19.99', description: 'This is a short description of the product.' },
    { image: 'https://via.placeholder.com/150', title: 'Sample Product 2', price: '$29.99', description: 'Another short description of a different product.' },
    { image: 'https://via.placeholder.com/150', title: 'Sample Product 3', price: '$39.99', description: 'Description for yet another product.' },
    { image: 'https://via.placeholder.com/150', title: 'Sample Product 4', price: '$49.99', description: 'Description for a new product.' },
    { image: 'https://via.placeholder.com/150', title: 'Sample Product 5', price: '$59.99', description: 'Additional description for more products.' },
    // Add more products as needed
  ];

  return (
    <MainLayout>
      <div className="p-4">
        {/* Category Section */}
        <h2 className="text-xl font-bold">Categories</h2>
        <div className="flex overflow-x-auto space-x-4 scrollbar-hidden">
          <CategoryCard image={cate.all} title="All" />
          <CategoryCard image={cate.chicken} title="Chicken" />
          <CategoryCard image={cate.burger} title="Burger" />
          <CategoryCard image={cate.steak} title="Beef" />
          <CategoryCard image={cate.fish} title="Fish" />
        </div>

        {/* Product Section */}
        <h2 className="text-xl font-bold mt-8 mb-4">Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
              // onAddToCart={handleAddToCart}
              addons={[
                { name: 'Extra Cheese', price: 1.50 },
                { name: 'Bacon', price: 2.00 },
                // Add more addons if needed
              ]}
            />
          ))}
        </div>
      </div>

      {/* Render Sidebar */}
      <Sidebar
        cart={cart}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        onCheckout={handleCheckout}
      />
    </MainLayout>
  );
};

export default PosHome;
