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
let activeGame = false;
let gameOver = false;
let gameSize = 3;

let boardDict = {
    'cell-00': '',
    'cell-01': '',
    'cell-02': '',
    'cell-10': '',
    'cell-11': '',
    'cell-12': '',
    'cell-20': '',
    'cell-21': '',
    'cell-22': '',
    // 'cell-00': $('#cell-00').text(),
    // 'cell-01': $('#cell-01').text(),
    // 'cell-02': $('#cell-02').text(),
    // 'cell-10': $('#cell-10').text(),
    // 'cell-11': $('#cell-11').text(),
    // 'cell-12': $('#cell-12').text(),
    // 'cell-20': $('#cell-20').text(),
    // 'cell-21': $('#cell-21').text(),
    // 'cell-22': $('#cell-22').text(),
};

const swapPlayers = function(){

  let NewPlayersSymbols = [currentPlayer, otherPlayer, currentSymbol, otherSymbol];

  if(currentPlayer === players[0]){

    currentPlayer = players[1];
    currentSymbol = symbols[players[1]];
    otherPlayer = players[0];
    otherSymbol = symbols[players[0]];

    NewPlayersSymbols = [players[1], players[0], symbols[players[1]], symbols[players[0]]];

  }else if (currentPlayer === players[1]){

    currentPlayer = players[0];
    currentSymbol = symbols[players[0]];
    otherPlayer = players[1];
    otherSymbol = symbols[players[1]];

    NewPlayersSymbols = [players[0], players[1], symbols[players[0]], symbols[players[1]]];

  }else{
    console.log('There is an error with toggling currentPlayer!');
    return false;
  }

  return NewPlayersSymbols;
};

module.exports = {
  currentPlayer,
  currentSymbol,
  otherPlayer,
  otherSymbol,
  symbols,
  players,
  boardDict,
  activeGame,
  gameOver,
  gameSize,
  swapPlayers,
};
