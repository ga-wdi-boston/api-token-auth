'use strict';

//
// imports
//

// const games = require('./games');
const players_file = require('./players');

let symbols = players_file.symbols;
let players = players_file.players;

//
// game flow
//

let currentPlayer = players[0];
let currentSymbol = symbols[currentPlayer];

module.exports = {
  currentPlayer,
  currentSymbol,
  symbols,
  players,
};
