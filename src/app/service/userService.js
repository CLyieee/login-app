import axios from 'axios';
import { API_BASE_URL } from '../util/config';

const USER_API_BASE_URL = `${API_BASE_URL}`;

// Function to handle user login
const userService = {
  async getAllUsers() {
    try {
      const response = await axios.get(`${USER_API_BASE_URL}/getall`);
      return response.data;
    } catch (error) {
      console.error('Error fetching users:', error.message);
      throw new Error('Error fetching users');
    }
  },

  async createUser(userData) {
    try {
      const response = await axios.post(`${USER_API_BASE_URL}/create`, userData);
      return response.data;
    } catch (error) {
      console.error('Error creating user:', error.message);
      throw new Error('Error creating user');
    }
  },

  async updateUser(id, updateData) {
    try {
      const response = await axios.put(`${USER_API_BASE_URL}/update`, { id, ...updateData });
      return response.data;
    } catch (error) {
      console.error('Error updating user:', error.message);
      throw new Error('Error updating user');
    }
  },

  async deleteUser(id) {
    try {
      const response = await axios.delete(`${USER_API_BASE_URL}/delete/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting user:', error.message);
      throw new Error('Error deleting user');
    }
  },

  async loginUser(email, password) {
    try {
      const response = await axios.post(`${USER_API_BASE_URL}/login`, { email, password });
      const { token, user } = response.data;
      localStorage.setItem('authToken', token); // Store the token in localStorage
      return { user, token };
    } catch (error) {
      console.error('Error logging in user:', error.message);
      throw new Error('Error logging in user');
    }
  }
};

export default userService;