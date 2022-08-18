import React from 'react';
import logo from './logo.svg';
import './App.css';
import CardBlog from './components/cardBlog';
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API;

function App() {
  return (
    <div className="App">
    
    <CardBlog/>
    </div>
  );
}

export default App;
