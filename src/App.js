import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Game from './Game/Game';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Game />
      </div>
    );
  }
}

export default App;
