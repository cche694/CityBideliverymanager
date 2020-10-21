import axios from './axios.js';
export const fetchData=(options) => axios.request({
  ...options,
});