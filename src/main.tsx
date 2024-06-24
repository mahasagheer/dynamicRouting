import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";
import { CountProvider } from "./components/AuthContext";
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CountProvider>
          <React.Suspense fallback="loading...">
            <App />
          </React.Suspense>
        </CountProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
