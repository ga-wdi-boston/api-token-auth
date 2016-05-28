'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./api');
const ui = require('./ui');
const game_logic = require('../game/game_logic');
const game_checks = require('../game/game_checks');

let currentPlayer = game_logic.currentPlayer;
let currentSymbol = game_logic.currentSymbol;
let otherPlayer = game_logic.otherPlayer;
let otherSymbol = game_logic.otherPlayer;

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

  // you can only go if there is an active, non-over game
  // eventually maybe these variables should be combined into one
  if(game_logic.gameOver === false && game_logic.activeGame === true){

    // the clicked cell and the value of that cell
    let currentVal = $(this).text();
    let clickedCell = this.id;

    // check if the cell is empty
    if( currentVal !== ""){
      console.log('Sorry! Someone already went there.');
      return false;

    } else {

      // set the new value using the currentSymbol
      $(this).text(currentSymbol);

      // set the new value in the model
      game_logic.boardDict[clickedCell] = currentSymbol;

      // check if the game is over
      game_logic.gameOver = game_checks.checkGame();

      if(game_logic.gameOver === false){

        // swap players
        console.log("current: ",currentPlayer,currentSymbol);
        let NewPlayersSymbols = game_logic.swapPlayers();
        currentPlayer = NewPlayersSymbols[0];
        otherPlayer = NewPlayersSymbols[1];
        currentSymbol = NewPlayersSymbols[2];
        otherSymbol  = NewPlayersSymbols[3];
        console.log("current: ",currentPlayer,currentSymbol);


        $('#player-turn').text(currentPlayer + "'s Turn!");

        return true;

      } else{
        console.log('The game is over! Start a new game!');
        $('.table-section').hide();
        alert('Game Over!');
        $('.game-over-section').show();
      }
    }
  } else if (game_logic.gameOver === true){

    console.log('The game is over! Start a new game!');
    $('.table-section').hide();
    alert('Game Over!');
    $('.game-over-section').show();

  } else if(game_logic.activeGame === false){
    console.log('You need to activate or start a game!');

  } else {
    console.log('There is a weird error with gameOver');
  }

};

const addHandlers = () => {

  //
  //buttons
  //
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#new-game').on('submit', onNewGame);
  $('#get-games').on('submit', onGetGames);
  $('#get-done-games').on('submit', onGetDoneGames);

  //
  // table cells
  //

  $('.cell').on('click', onSetCellValue);
};

module.exports = {
  addHandlers,
};
