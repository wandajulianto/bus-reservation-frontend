import axios from 'axios';


const BASE_URL = import.meta.env.VITE_API_URL;


const authService = {
  async login(email, password) {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        email,
        password
      });
      
      // Simpan token di localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
      }
      
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Login failed');
    }
  },


  async register(userData) {
    try {
      const response = await axios.post(`${BASE_URL}/auth/register`, userData);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : new Error('Registration failed');
    }
  },


  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },


  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  },


  getToken() {
    return localStorage.getItem('token');
  },


  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
};


export default authService;