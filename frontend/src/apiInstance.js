import axios from 'axios';
const apiInstance = axios.create({
  baseURL: 'http://13.53.193.5:3000/api',
  withCredentials: true,
});

export default apiInstance;
