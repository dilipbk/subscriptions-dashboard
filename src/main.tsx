import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/index.scss";
import { store } from "./features/store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
