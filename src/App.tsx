import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name={'Kayla'} age={26} country={'US'}/>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
