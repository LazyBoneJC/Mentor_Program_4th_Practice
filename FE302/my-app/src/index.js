import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    default: "palevioletred",
    primary_300: "#ff7979",
    primary_400: "#e33e3e",
    primary_500: "#af0505",
  }
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render (
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
); // 先把 <React.StrictMode></React.StrictMode> 拿掉了

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
