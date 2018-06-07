import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Inicio from './Home/Inicio'
import Categorias from './Jogo/Categorias'
import Perguntas from './Jogo/Perguntas'
import Resultado from './Jogo/Resultado'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Jogo de Perguntas e Respostas</h1>
        </header>
        <Resultado />
      </div>
    );
  }
}

export default App;
