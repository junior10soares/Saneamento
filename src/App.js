import React from 'react';
import AppProvider from "./hooks";
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import { GlobalStyle } from './GlobalStyle/theme';
import {ToastContainer} from 'react-toastify';



const App = () => {
  return(
    <AppProvider>
      <BrowserRouter>
      <ToastContainer />
      <Routes />  
      </BrowserRouter>
      <GlobalStyle />
    </AppProvider>
  );
}

export default App;