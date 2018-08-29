import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';
import PLAYERS from './data';

const getPlayersSelectedBy = (selectedPlayersByTurn, numPickers, player) => {
  return Object.keys(selectedPlayersByTurn).filter(turn => getPicker(numPickers, turn) === player).map(turn => selectedPlayersByTurn[turn])
};

const getRemainingPlayers = (allPlayers, selectedPlayersByTurn) => {
  const selected = Object.values(selectedPlayersByTurn);
  const remaining = new Set(allPlayers);
  selected.forEach(x => remaining.delete(x));
  return Array.from(remaining.values());
}

// snake draft
const getPicker = (numPickers, turn) => {
  return Math.floor(turn / numPickers) % 2 === 0 ?
    // if even then ascending order
    turn % numPickers :
    // if odd then descending order
    numPickers - 1 - turn % numPickers;
}

const RenderPlayer = ({ player }) => {
  return (
    <div>
      {player.name}, {player.position}, {player.team}, {player.byeWeek} | value: {player.value}
    </div>
  )
}

class App extends Component {
  createPlayerInput = React.createRef();

  state = {
    numPickers: 15,
    turn: 0,
    displayedPicker: 3,
    allPlayers: PLAYERS,
    // key value pair where key is turn, value is player
    selectedPlayers: {
    },
  };

  changeDisplayedPlayer = (e) => {
    const picker = parseInt(e.currentTarget.value, 10);
    this.setState(() => ({
      displayedPicker: picker,
    }));
  };

  addPlayer = (e) => {
    e.preventDefault();
    const playerName = this.createPlayerInput.current.value;
    const { allPlayers } = this.state;
    const player = {
      name: playerName,
      value: 0,
      position: 'N/A',
      team: 'N/A',
      byeWeek: 'N/A',
    }
    this.setState(() => ({
      allPlayers: allPlayers.concat([player])
    }));
  }

  draftPlayer = (option) => {
    const { turn, selectedPlayers } = this.state;
    const player = option.value;
    this.setState(() => ({
      turn: turn + 1,
      selectedPlayers: {
        ...selectedPlayers,
        [turn]: player,
      }
    }));
  }

  setTurn = (e) => {
    const turn = parseInt(e.currentTarget.value, 10);
    this.setState(() => ({
      turn,
    }));
  }

  render() {
    const { turn, selectedPlayers, displayedPicker, allPlayers, numPickers } = this.state;
    const players = getRemainingPlayers(allPlayers, selectedPlayers);
    return (
      <div style={{ display: 'flex' }}>
        <ol style={{ flex: 2 }}>
          {players.map(player => {
            return (
              <li key={`${player.name}-${player.team}`}>
                <RenderPlayer player={player} />
              </li>
            )
          })}
        </ol>
        <div style={{ flex: 1 }}>
          <div>Turn: <input type="number" value={turn} onChange={this.setTurn} />, Picker: {getPicker(numPickers, turn)}, Teams: {numPickers}</div>
          <div>
            <label>Choose player
                <Select onChange={this.draftPlayer} options={players.map(x => ({ value: x, label: `${x.name}, ${x.position}, ${x.team}, ${x.byeWeek}`}))} />
            </label>
          </div>
          <div>
            <form onSubmit={this.addPlayer}>
            <label>Create player <input type="text" ref={this.createPlayerInput} /></label>
            </form>
          </div>
          <div>
            <label>Players selected by <input type="number" value={displayedPicker} onChange={this.changeDisplayedPlayer} /></label>
            <ol>
              {getPlayersSelectedBy(selectedPlayers, numPickers, displayedPicker).map(player => {
                return (
                  <li key={`${player.name}-${player.team}`}>
                    <RenderPlayer player={player} />
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
