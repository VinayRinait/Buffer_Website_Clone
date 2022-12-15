<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from "react-router-dom"
import { StyledEngineProvider, CssVarsProvider } from '@mui/joy/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
=======
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
>>>>>>> ea0ddd0304ccf7045a07aeb79fc385e5b1a7d8d6
root.render(
  <StyledEngineProvider injectFirst>
  <CssVarsProvider>
  <BrowserRouter>
  
  <ChakraProvider>
<<<<<<< HEAD
 
 <React.StrictMode>
    <App />
  </React.StrictMode>
 
=======
    <App />
>>>>>>> ea0ddd0304ccf7045a07aeb79fc385e5b1a7d8d6
  </ChakraProvider>
  
  </BrowserRouter>
  </CssVarsProvider>
  </StyledEngineProvider>



 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
