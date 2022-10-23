import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "plus":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "minus":
      if (state.count > 0) {
        return {
          ...state,
          count: state.count - action.payload,
        };
      }

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
