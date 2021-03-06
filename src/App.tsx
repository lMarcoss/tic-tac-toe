import React from 'react';
import logo from './logo.png';
import './App.css';
import Game from "./modules/game/game";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Game/>
      </header>
    </div>
  );
}

export default App;
