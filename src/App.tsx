import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routing from "./components/router/routing";
import { Provider } from "react-redux";
import store from "./store/store";
import axios from "axios";
import Footer from "./components/common/footer";
import Arrow from "./components/common/arrow";
import Navbar from "./components/common/navbar";
axios.defaults.baseURL = process.env.REACT_APP_API;

function App() {
  return (
    <div className="container">
      <div className="App">
        <Provider store={store}>
          <Navbar />
          <Routing />
          <Arrow />
        </Provider>
        <Footer />
      </div>
    </div>
  );
}

export default App;
