import axios from 'axios';
import { CookieStorage } from "cookie-storage";

const cookieStorage = new CookieStorage();
export const baseURL = "https://api-homologa-semasa.cityconnect.com.br";
const api = axios.create({
  baseURL: "https://api-homologa-semasa.cityconnect.com.br/api/v1/",
  // baseURL: process.env.APP_API_BASE_URL,
});

api.interceptors.request.use(function (config) {
  const token = cookieStorage.getItem('@senarsemasa:token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

export default api;

