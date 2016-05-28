'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const game_logic = require('../game/game_logic');
const game_checks = require('../game/game_checks');

const onSignUp = function(event){

  event.preventDefault();
  game_logic.activeGame = false;

  let data = getFormFields(event.target);
  api.signUp(data)
  .done(ui.success)
  .fail(ui.failure);

};

const onSignIn = function(event){

  event.preventDefault();
  game_logic.activeGame = false;

  let data = getFormFields(event.target);
  api.signIn(data)
  .done(ui.signInSuccess)
  .then(ui.showBoard)
  .fail(ui.failure);

};

const onSignOut = function(event){

  event.preventDefault();
  game_logic.activeGame = false;

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

  api.newGame()
  .done(ui.success)
  .then(ui.newGame)
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

  if(game_logic.gameOver === false && game_logic.activeGame === true){

    let currentVal = $(this).text();

    if( currentVal !== ""){
      console.log('Sorry! Someone already went there.');
      return false;

    } else {

      $(this).text(game_logic.currentSymbol);
      let clickedCell = this.id;

      game_logic.boardDict[clickedCell] = game_logic.currentSymbol;
      game_logic.boardDict[clickedCell] = game_logic.currentSymbol;

      game_logic.gameOver = game_checks.checkGame();
      if(game_logic.gameOver === false){

        if(game_logic.currentPlayer === game_logic.players[0]){

          game_logic.currentPlayer = game_logic.players[1];
          game_logic.currentSymbol = game_logic.symbols[game_logic.players[1]];
          game_logic.otherPlayer = game_logic.players[0];
          game_logic.otherSymbol = game_logic.symbols[game_logic.players[0]];

        }else if (game_logic.currentPlayer === game_logic.players[1]){

          game_logic.currentPlayer = game_logic.players[0];
          game_logic.currentSymbol = game_logic.symbols[game_logic.players[0]];
          game_logic.otherPlayer = game_logic.players[1];
          game_logic.otherSymbol = game_logic.symbols[game_logic.players[1]];

        }else{
          console.log('There is an error with toggling currentPlayer!');
          return false;
        }

        console.log('boardDict: ', game_logic.boardDict);
        $('#player-turn').text(game_logic.currentPlayer + "'s Turn!");
        return true;
        }
      }
  } else if (game_logic.gameOver === true){
    console.log('The game is over! Start a new game!');
    $('.table-section').hide();
    alert('Game Over!');
    $('.game-over-section').show();

  } else{
    console.log('There is a weird error with gameOver');
  }

};

const addHandlers = () => {

  //
  //buttons
  //
  $('#sign-up').on('submit', onSignUp);

  $('#sign-in').on('submit', onSignIn);
  $('#sign-in').on('submit', onGetGames);
  $('#sign-in').on('submit', onGetDoneGames);

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
