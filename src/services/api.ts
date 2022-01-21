import axios from 'axios';

const api = axios.create({
  baseURL: 'http://my-api-endpoint',
});

export default api;
