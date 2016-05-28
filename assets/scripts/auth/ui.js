'use strict';

const app = require('../app.js');
const game_logic = require('../game/game_logic.js');

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
  console.log('board shown!');
  $('.hideable').show();
};

const hideBoard = function(){
  console.log('board hidden!');
  $('.table-section').hide();
  $('.hideable').hide();
};

const updateGames = function(data){
  console.log('updating games!');

  // set objects
  if(data !== undefined && data.games !== undefined){
    app.games = data.games;
    $('#stats-player-id').text(app.user.id);
    $('#stats-games').text(app.games.length);
    $('#stats-finished-games').text(app.finished_games.length);
  }
};

const updateFinishedGames = function(data){
    console.log('updating finished games!');

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

  game_logic.gameOver = false;
  game_logic.activeGame = true;
  game_logic.CurrentPlayer = game_logic.players[0];
  game_logic.otherPlayer = game_logic.players[1];
  game_logic.currentSymbol = game_logic.symbols[game_logic.currentPlayer];
  game_logic.otherSymbol = game_logic.symbols[game_logic.otherPlayer];

  $('#player-turn').text(game_logic.currentPlayer + "'s Turn!");
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
