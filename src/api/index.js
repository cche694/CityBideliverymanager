import axios from '../axios/index';
export const fetchData=(options) => axios.request({
  ...options,
});