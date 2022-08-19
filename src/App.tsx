import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routing from "./components/router/routing";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API;

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
