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

let newGame = {
  id: null,
  cells: null,
  over: null,
  player_x: null,
  player_o: null,
};

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
};

let boardTrans = [
  'cell-00',
  'cell-01',
  'cell-02',
  'cell-10',
  'cell-11',
  'cell-12',
  'cell-20',
  'cell-21',
  'cell-22'
];

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

const updateGameInfo = function(){

  $("#game-id-data").text(newGame.id);
  $("#game-cells-data").text(newGame.cells);
  $("#game-over-data").text(newGame.over);
  $("#player-x-data").text(newGame.player_x);
  $("#player-o-data").text(newGame.player_o);

  return true;
};


module.exports = {
  currentPlayer,
  currentSymbol,
  otherPlayer,
  otherSymbol,
  symbols,
  players,
  newGame,
  boardDict,
  activeGame,
  gameOver,
  gameSize,
  swapPlayers,
  updateGameInfo,
  boardTrans,
};
