'use strict';

const app = require('../app.js');
const gameLogic = require('../game/gameLogic.js');

const success = (data) => {
  if(data){
    console.log(data);
  }else{
    console.log('GREAT SUCCESS!!!!!');
  }
};

const failure = (error) => {
  console.error(error);
};

const signInSuccess = function(data){
  app.user = data.user;

  console.log('app: ', app);
};

const signOutSuccess = function(){
  app.user = null;
  console.log('app: ', app);
};

const showBoard = function(){

  $('.hideable').show();
};

const hideBoard = function(){

  $('.table-section').hide();
  $('.hideable').hide();
};

const updateGames = function(data){

  // set objects
  if(data !== undefined && data.games !== undefined){
    app.games = data.games;
    $('#stats-player-id').text(app.user.id);
    $('#stats-games').text(app.games.length);
    $('#stats-finished-games').text(app.finished_games.length);
  }
};

const updateFinishedGames = function(data){

    // set objects
    if(data !== undefined && data.games !== undefined){
      app.finished_games = data.games;
      $('#stats-player-id').text(app.user.id);
      $('#stats-games').text(app.games.length);
      $('#stats-finished-games').text(app.finished_games.length);
    }
  };

const newGame = function(){

  $('.table-section').hide();
  $('.hideable').hide();
  $('.game-over-section').hide();

  gameLogic.gameOver = false;
  gameLogic.activeGame = true;
  gameLogic.currentPlayer = gameLogic.players[0];
  gameLogic.otherPlayer = gameLogic.players[1];
  gameLogic.currentSymbol = gameLogic.symbols[gameLogic.currentPlayer];
  gameLogic.otherSymbol = gameLogic.symbols[gameLogic.otherPlayer];

  $('#player-turn').text(gameLogic.currentPlayer + "'s Turn!");
  $('.cell').text('');

  $('.table-section').show();
  $('.hideable').show();

};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  showBoard,
  hideBoard,
  updateGames,
  updateFinishedGames,
  newGame,
};
