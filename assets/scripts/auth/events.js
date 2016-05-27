'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const game_logic = require('../game/game_logic');
let currentPlayer = game_logic.currentPlayer;
let currentSymbol = game_logic.currentSymbol;
let symbols = game_logic.symbols;
let players = game_logic.players;

const onSignUp = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.success)
  .then(ui.showBoard)
  .fail(ui.failure);
};

const onSignIn = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .then(ui.showBoard)
  .fail(ui.failure);
};

const onSignOut = function(event){
  event.preventDefault();
  api.signOut()
  .done(ui.success)
  .then(ui.hideBoard)
  .fail(ui.failure);
};

const onChangePassword = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .then(ui.showBoard)
  .fail(ui.failure);
};

const onNewGame = function(event){
  event.preventDefault();

  $('.cell').text('');

  api.newGame()
  .done(ui.success)
  .then(ui.showBoard)
  .then(ui.updateGames)
  .then(ui.updateFinishedGames)
  .fail(ui.failure);
};

const onGetGames = function(event){
  event.preventDefault();
  api.showGames()
  .done(ui.success)
  .then(ui.updateGames)
  .fail(ui.failure);
};

const onGetDoneGames = function(event){
  event.preventDefault();
  api.showOverGames()
  .done(ui.success)
  .then(ui.updateFinishedGames)
  .fail(ui.failure);
};

const onSetCellValue = function(){
  $(this).text(currentSymbol);
  $('#player-turn').text(currentPlayer + "'s Turn!");

  if(currentPlayer === players[0]){
    game_logic.currentPlayer = players[1];
    currentPlayer = players[1];
    game_logic.currentSymbol = symbols[currentPlayer];
    currentSymbol = symbols[currentPlayer];
  }else if (currentPlayer === players[1]){
    game_logic.currentPlayer = players[0];
    currentPlayer = players[0];
    game_logic.currentSymbol = symbols[currentPlayer];
    currentSymbol = symbols[currentPlayer];
  }else{
    console.log('There is an error with toggling currentPlayer!');
    return false;
  }

  return true;
};

const addHandlers = () => {

  //
  //buttons
  //
  $('#sign-up').on('submit', onSignUp);

  $('#sign-in').on('submit', onSignIn);
  // $('#sign-in').on('submit', onGetGames);
  // $('#sign-in').on('submit', onGetDoneGames);

  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#new-game').on('submit', onNewGame);
  $('#get-games').on('submit', onGetGames);
  $('#get-done-games').on('submit', onGetDoneGames);


  $('#get-done-games').on('submit', onGetDoneGames);

  //
  // table cells
  //

  $('.cell').on('click', onSetCellValue);
};

module.exports = {
  addHandlers,
};
