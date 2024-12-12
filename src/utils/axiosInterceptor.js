// src/utils/axiosInterceptor.js
import axios from 'axios';


const setupInterceptors = (dispatch) => {
  axios.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );


  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401) {
        dispatch({ type: 'LOGOUT' });
      }
      return Promise.reject(error);
    }
  );
};


export default setupInterceptors;