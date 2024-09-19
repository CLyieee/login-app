import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './app/pages/login';
import './App.css';
import Register from './app/pages/register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
