import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import App from "./components/App";
import { persistedStore, store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistedStore}>
      <BrowserRouter basename="/Car_Rent">
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
