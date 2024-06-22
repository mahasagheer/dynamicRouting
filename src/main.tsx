import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import { CountProvider } from "./components/AuthContext";
import "./components/i18n.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CountProvider>
          <App />
        </CountProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
