import React from "react";
import "./App.less";
import Demo from "./page/demo";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./store/index.js";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Demo></Demo>
      </Provider>
    </div>
  );
}

export default App;
