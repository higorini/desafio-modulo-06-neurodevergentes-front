import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import GlobalProvider from "./context/GlobalProvider";
import "./global.css";
import AllRoutes from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <AllRoutes />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);
