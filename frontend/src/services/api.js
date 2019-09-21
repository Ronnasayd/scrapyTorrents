import axios from 'axios';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? process.env.REACT_APP_BASE_URL_DEVELOPMENT
      : process.env.REACT_APP_BASE_URL,
});

export default api;
