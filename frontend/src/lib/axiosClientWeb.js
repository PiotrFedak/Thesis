import axios from 'axios';

const axiosClientWeb = axios.create({
  baseURL: 'https://pleased-usually-corgi.ngrok-free.app/',
});

axiosClientWeb.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  config.headers['ngrok-skip-browser-warning'] = 'true';
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClientWeb.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('authToken');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default axiosClientWeb;
