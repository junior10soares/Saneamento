import axios from 'axios';


/* const api = axios.create({
  baseURL: 'http://api-homologa-semasa.cityconnect.com.br/api/v1',
}); */
const api = axios.create({
  baseURL: 'https://api-sanear.cityconnect.com.br/api/v1',
});

/* const api = axios.create({
  baseURL: 'http://localhost:8000/api/v1',
}); */

export default api;

export const baseURL = "https://api-sanear.cityconnect.com.br"
/* export const baseURL = "http://localhost:8000" */
