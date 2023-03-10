//import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { DarkContextProvider } from "./context/darkModeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <DarkContextProvider>
      <App />
    </DarkContextProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
