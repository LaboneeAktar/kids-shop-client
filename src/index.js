import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./contexts/StateProvider";
import reducer from "./contexts/reducer";
import { initialState } from "./contexts/initialState";
import AuthProvider from "./contexts/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <StateProvider initialState={initialState} reducer={reducer}>
          <App />
        </StateProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
