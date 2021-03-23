import axios from 'axios';
import {notify} from '../Notification';
import { CookieStorage } from "cookie-storage";

const cookieStorage = new CookieStorage();
export const baseURL = "http://localhost:8000";
const api = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  // baseURL: process.env.APP_API_BASE_URL,
});

api.interceptors.request.use(function (config) {
  const token = cookieStorage.getItem('@senarsemasa:token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

export default api;