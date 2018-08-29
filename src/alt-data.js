import rbs from './rb';
import wrs from './wr';
import qbs from './qb';
import tes from './te';

const buildPlayer = (playerString, position) => {
  const parts = playerString.split(',');
  const name = parts[0];
  const [team, byeWeek] = parts[2].split('/');
  const value = parts[parts.length - 1];
  return {
    name,
    position,
    team,
    byeWeek,
    value,
  }
}

const buildPlayers = (playersString, position) => {
  return playersString.split('\n').map(x => buildPlayer(x, position))
}

const players = buildPlayers(rbs, 'RB')
  .concat(buildPlayers(wrs, 'WR'))
  .concat(buildPlayers(qbs, 'QB'))
  .concat(buildPlayers(tes, 'TE'))
  .sort((a, b) => b.value - a.value);

export default players;

