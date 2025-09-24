import axios from 'axios';

const API = axios.create({
  baseURL: 'https://localhost:7051/api', // change if your backend URL/port is different
});

// Add token to requests automatically
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
