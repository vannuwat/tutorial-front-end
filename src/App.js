import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import axios, * as others from 'axios';

function App() {
  
  const [data, setData] = useState("Hello");

  useEffect(() => {
    async function fetchData() {
      try {
      const {data: response} = await axios.get('http://localhost:5000/api/get/data');
      setData(response);
      } 
      catch (error) {
        console.error(error.message);
      }
    }
    fetchData();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
