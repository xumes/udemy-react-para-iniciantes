import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Inicio from './Home/Inicio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jogo de Perguntas e Respostas.</h1>
        </header>
        <Inicio />
      </div>
    );
  }
}

export default App;
