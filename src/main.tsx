import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import "./i18n.js";
import store from "./store";
import { AuthProvider } from "./components/AuthContext";
import { Provider } from "react-redux";
store.subscribe(() => console.log(store.getState()));

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
