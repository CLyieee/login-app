import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './app/pages/login';
import Register from './app/pages/register';
import MainLayout from './app/layout/MainLayout'; // Adjust path to your layout component
import './App.css';
import PosHome from './app/pages/posHome';
import ProductDetails from './app/components/card/ProductDetails';
import { app, analytics } from '../src/firebase';


function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes without MainLayout */}
        <Route path="/" element={<PosHome />} />
        <Route path="register" element={<Register />} />
        <Route path="/product-details" element={<ProductDetails />} />

        {/* Routes wrapped in MainLayout */}
        <Route 
          path="home" 
          element={
            <MainLayout>
              <PosHome />
            </MainLayout>
          } 
        />
        {/* Add more routes wrapped in MainLayout as needed */}
      </Routes>
    </Router>
  );
}

export default App;
