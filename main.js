'use strict';

const team = {
  _players: [
    { firstName: 'Ivan', lastName: 'Sal', age: 33 },
    { firstName: 'Gino', lastName: 'Ino', age: 22 },
    { firstName: 'Peppino', lastName: 'Cotechino', age: 56 },
  ],
  _games: [
    { opponent: 'Roma', teamPoints: 42, opponentPoints: 25 },
    { opponent: 'Milan', teamPoints: 87, opponentPoints: 96 },
    { opponent: 'Torino', teamPoints: 102, opponentPoints: 88 },
  ],

  get players() {
    return this._players;
  },

  get games() {
    return this._games;
  },

  addPlayer: function (firstName, lastName, age) {
    const newPlayer = { firstName: firstName, lastName: lastName, age: age };
    this._players.push(newPlayer);
  },

  addGame: function (opponent, teamPoints, opponentPoints) {
    const newGame = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this._games.push(newGame);
  },
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team._players);

team.addGame('Lazio', 22, 34);
team.addGame('Porto', 78, 32);
team.addGame('Genova', 67, 55);
console.log(team._games);
