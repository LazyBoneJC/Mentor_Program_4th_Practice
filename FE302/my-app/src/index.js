import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
// import App from "./components/MessageBoard/App";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    default: "palevioletred",
    primary_300: "#ff7979",
    primary_400: "#e33e3e",
    primary_500: "#af0505",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
); // 先把 <React.StrictMode></React.StrictMode> 拿掉了
