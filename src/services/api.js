import axios from 'axios';
import { CookieStorage } from "cookie-storage";

const cookieStorage = new CookieStorage();
export const baseURL = "https://api-homologa-semasa.cityconnect.com.br";
/* export const baseURL = "http://localhost:8000"; */

const api = axios.create({
  baseURL: "https://api-homologa-semasa.cityconnect.com.br/api/v1/",
});
/*   baseURL: "http://localhost:8000/api/v1/",
});
 */
api.interceptors.request.use(function (config) {
  const token = cookieStorage.getItem('@senarsemasa:token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

export default api;

