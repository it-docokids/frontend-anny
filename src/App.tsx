import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routing from "./components/router/routing";
import { Provider } from "react-redux";
import store from "./store/store";
import axios from "axios";
import Footer from "./components/footer";
axios.defaults.baseURL = process.env.REACT_APP_API;

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routing />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
