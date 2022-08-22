import axios from 'axios';
import { CookieStorage } from "cookie-storage";

const cookieStorage = new CookieStorage();
export const baseURL = "https://api-sanear.cityconnect.com.br";


const api = axios.create({
  baseURL: "https://api-sanear.cityconnect.com.br/api/v1/",
});

api.interceptors.request.use(function (config) {
  const token = cookieStorage.getItem('senarsemasatoken');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

export default api;

