import React, { Component } from 'react';
import Select from 'react-select';
import './App.css';
import PLAYERS from './data';

const PLAYERS_SET = new Set(PLAYERS);

const getAllSelectedPlayers = (selectedPlayersByTeam) => {
  return Object.values(selectedPlayersByTeam).reduce((acc, val) => acc.concat(val), []);
};

const getPlayersSelectedBy = (selectedPlayersByTeam, player) => {
  return selectedPlayersByTeam[player] || [];
};

const getRemainingPlayers = (selectedPlayersByTeam) => {
  const selected = getAllSelectedPlayers(selectedPlayersByTeam);
  const remaining = new Set(PLAYERS_SET.values());
  selected.forEach(x => remaining.delete(x));
  return Array.from(remaining.values());
}

const getPicker = (numPickers, turn) => {
  return turn %  numPickers;
}

const RenderPlayer = ({ player }) => {
  return (
    <div>
      {player.name}, {player.position}, {player.team}, {player.byeWeek}
    </div>
  )
}

class App extends Component {
  state = {
    numPlayers: 16,
    turn: 0,
    displayedPlayer: 3,
    selectedPlayers: {
    },
  };

  changeDisplayedPlayer = (e) => {
    const player = parseInt(e.currentTarget.value, 10);
    console.log("NO", player)
    this.setState(() => ({
      displayedPlayer: player,
    }));
  };

  draftPlayer = (option) => {
    console.log("DD", option)
    const { turn, numPlayers, selectedPlayers } = this.state;
    const picker = getPicker(numPlayers, turn);
    const picked = getPlayersSelectedBy(selectedPlayers, picker);
    const updated = picked.concat([option.value]);
    console.log("OKAY", updated)
    this.setState(() => ({
      turn: turn + 1,
      selectedPlayers: {
        ...selectedPlayers,
        [picker]: updated
      }
    }));
  }

  render() {
    const { turn, selectedPlayers, displayedPlayer } = this.state;
    const players = getRemainingPlayers(selectedPlayers);
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
          <div>Turn: {turn}</div>
          <div>
            <label>Choose player
                <Select onChange={this.draftPlayer} options={players.map(x => ({ value: x, label: `${x.name}, ${x.position}, ${x.team}, ${x.byeWeek}`}))} />
            </label>
          </div>
          <div>
            <label>Players selected by <input type="number" value={displayedPlayer} onChange={this.changeDisplayedPlayer} /></label>
            <ol>
              {getPlayersSelectedBy(selectedPlayers, displayedPlayer).map(player => {
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
