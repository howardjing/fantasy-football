import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';
import PLAYERS from './data';

const getAllSelectedPlayers = (selectedPlayersByTeam) => {
  return Object.values(selectedPlayersByTeam).reduce((acc, val) => acc.concat(val), []);
};

const getPlayersSelectedBy = (selectedPlayersByTeam, player) => {
  return selectedPlayersByTeam[player] || [];
};

const getRemainingPlayers = (allPlayers, selectedPlayersByTeam) => {
  const selected = getAllSelectedPlayers(selectedPlayersByTeam);
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
      {player.name}, {player.position}, {player.team}, {player.byeWeek}
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
    selectedPlayers: {
    },
  };

  changeDisplayedPlayer = (e) => {
    const picker = parseInt(e.currentTarget.value, 10);
    console.log("NO", picker)
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
      position: 'N/A',
      team: 'N/A',
      byeWeek: 'N/A',
    }
    this.setState(() => ({
      allPlayers: allPlayers.concat([player])
    }));
  }

  draftPlayer = (option) => {
    const { turn, numPickers, selectedPlayers } = this.state;
    const picker = getPicker(numPickers, turn);
    const picked = getPlayersSelectedBy(selectedPlayers, picker);
    const updated = picked.concat([option.value]);
    this.setState(() => ({
      turn: turn + 1,
      selectedPlayers: {
        ...selectedPlayers,
        [picker]: updated
      }
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
          <div>Turn: {turn}, Picker: {getPicker(numPickers, turn)}, Teams: {numPickers}</div>
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
              {getPlayersSelectedBy(selectedPlayers, displayedPicker).map(player => {
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
