import React, { createContext, useCallback, useState, useContext } from "react";
import { CookieStorage } from "cookie-storage";
import {useHistory} from 'react-router-dom';
import axios from "axios";
import api from "../services/api";

export const AuthContext = createContext({});

const cookieStorage = new CookieStorage();
export const AuthProvider = ({ children }) => {
  const token = cookieStorage.getItem("@senarsemasa:token");
  const [data, setData] = useState(() => {

    if (token) {
      axios.defaults.headers.authorization = `Bearer ${token}`;
      return { token };
    }

   /*  if(!token){
      window.location.href = '/auth/login';
    } */

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    console.log('email', email, 'passs', password)
    const response = await api.post('login', {
      email,
      password
    });

    const { access_token: token } = response.data;

    cookieStorage.setItem("@senarsemasa:token", token);

    axios.defaults.headers.authorization = `Bearer ${token}`;



    setData({ token });
  }, []);

  const signOut = useCallback(() => {
    cookieStorage.removeItem("@senarsemasa:token");
    setData({});
  }, [setData]);

  return (
    <AuthContext.Provider value={{ token: data.token, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  

  if (!context) {
    throw new Error("useAuth must be used within Auth.Provider");
  }

  return context;
}
