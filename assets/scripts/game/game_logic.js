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

let gameOver = false;

let currentPlayer = players[0];
let otherPlayer = players[1];
let currentSymbol = symbols[currentPlayer];
let otherSymbol = symbols[otherPlayer];
let activeGame = false;
let gameSize = 3;

let boardDict = {
    'cell-00': $('#cell-00').text(),
    'cell-01': $('#cell-01').text(),
    'cell-02': $('#cell-02').text(),
    'cell-10': $('#cell-10').text(),
    'cell-11': $('#cell-11').text(),
    'cell-12': $('#cell-12').text(),
    'cell-20': $('#cell-20').text(),
    'cell-21': $('#cell-21').text(),
    'cell-22': $('#cell-22').text(),
};

module.exports = {
  currentPlayer,
  currentSymbol,
  otherPlayer,
  otherSymbol,
  symbols,
  players,
  boardDict,
  gameOver,
  activeGame,
  gameSize,
};
