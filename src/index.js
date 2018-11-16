import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';

import App from "./App";
import reducers from "./reducers";
import { getArtist } from "./reducers/artist";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getArtist());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
