import React, { useState } from 'react';
import  userService  from '../service/userService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    setIsLoading(true);
    setError(null);

    try {
      const response = await userService.loginUser(email, password);
      console.log('Login successful:', response);
      navigate('home');
    } catch (err) {
      setError(err.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>
        {error && <p className="text-red-500 mb-4 text-center" aria-live="assertive">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-lg hover:bg-indigo-700"
            disabled={isLoading}
          >
            {isLoading ? 'Processing...' : 'Login'}
          </button>
          <div className="mt-4 text-center">
            <p>
              Don't have an account?
              <button
                type="button"
                onClick={() => navigate('/register')}
                className="text-indigo-600 hover:text-indigo-700 ml-2 font-medium"
              >
                Register
              </button>
            </p>
            <div className="mt-4 text-center">
              <a href="/forgot-password" className="text-indigo-600 hover:text-indigo-700">Forgot your password?</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
