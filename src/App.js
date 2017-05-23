import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Game from './Game/Game';
import Cover from './Cover/Cover';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cover />
        <Game />
      </div>
    );
  }
}

export default App;
