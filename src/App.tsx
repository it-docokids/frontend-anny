import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routing from "./components/router/routing";
import { Provider } from "react-redux";
import store from "./store/store";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API;

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routing />
      </div>
    </Provider>
  );
}

export default App;
