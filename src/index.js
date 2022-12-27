import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./contexts/StateProvider";
import reducer from "./contexts/reducer";
import { initialState } from "./contexts/initialState";
import AuthProvider from "./contexts/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();
