import axios from 'axios';

const api = axios.create({
  baseURL: process.env.API_URL || 'https://sangbleu-test.cdn.prismic.io/api',
  timeout: 3000,
  withCredentials: true,
});

export default api;
