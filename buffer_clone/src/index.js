import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from "react-redux";
import { store } from "./store/store";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </Provider>
);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <StyledEngineProvider injectFirst>
//     <CssVarsProvider>
//       <BrowserRouter>
//         <ChakraProvider>
//           <App />
//         </ChakraProvider>
//       </BrowserRouter>
//     </CssVarsProvider>
//   </StyledEngineProvider>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
