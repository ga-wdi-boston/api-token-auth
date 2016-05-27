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
let otherPlayer = players[1];
let currentSymbol = symbols[currentPlayer];
let otherSymbol = symbols[otherPlayer];

let board_array = [
  $('#cell-0').text(),
  $('#cell-1').text(),
  $('#cell-2').text(),
  $('#cell-3').text(),
  $('#cell-4').text(),
  $('#cell-5').text(),
  $('#cell-6').text(),
  $('#cell-7').text(),
  $('#cell-8').text(),
];

module.exports = {
  currentPlayer,
  currentSymbol,
  otherPlayer,
  otherSymbol,
  symbols,
  players,
  board_array,
};
