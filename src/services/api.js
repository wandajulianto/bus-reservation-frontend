import axios from 'axios';


const API_URL = 'http://localhost:8080/api'; // Sesuaikan dengan backend Anda


const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});


// Tambahkan interceptor untuk token (jika diperlukan)
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export const authService = {
  login: (email, password) => {
    return api.post('/auth/login', { email, password });
  },
  register: (userData) => {
    return api.post('/auth/register', userData);
  }
};


export const busService = {
  searchBuses: (searchParams) => {
    return api.get('/buses/search', { params: searchParams });
  },
  bookTicket: (bookingData) => {
    return api.post('/bookings', bookingData);
  }
};


export default api;