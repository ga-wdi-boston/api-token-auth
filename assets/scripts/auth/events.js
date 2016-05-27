'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

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
  api.newGame()
  .done(ui.success)
  .then(ui.showBoard)
  .then(ui.updateStats)
  .fail(ui.failure);
};

const onGetGames = function(event){
  event.preventDefault();
  api.showGames()
  .done(ui.success)
  .then(ui.updateStats)
  .fail(ui.failure);
};

const onGetDoneGames = function(event){
  event.preventDefault();
  api.showOverGames()
  .done(ui.success)
  .then(ui.updateStats)
  .fail(ui.failure);
};


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
  $('#new-game').on('submit', onNewGame);
  $('#get-games').on('submit', onGetGames);
  $('#get-done-games').on('submit', onGetDoneGames);
};

module.exports = {
  addHandlers,
};
