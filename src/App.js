import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import players from './data';

class App extends Component {
  render() {
    return (
      <ol>
        {players.map(player => {
          return (
            <li key={`${player.name}-${player.team}`}>
              {player.name}, {player.position}, {player.team}, {player.byeWeek}
            </li>
          )
        })}
      </ol>
    );
  }
}

export default App;
