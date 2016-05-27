'use strict';

const authApi = require('./auth/api.js');
const authUi = require('./auth/ui.js');
//const authEvents = require('./auth/events.js');

const onSignUp = function(event){
  event.preventDefault();
  authApi.signUp(event.target)
  .done(authUi.success)
  .fail(authUi.fail);
};

const onSignIn = function(event){
  event.preventDefault();
  authApi.signIn(event.target)
  .done(authUi.signInSuccess)
  .fail(authUi.fail);
};

const onSignOut = function(event){
  event.preventDefault();
  authApi.signOut(event.target)
  .done(authUi.signOutSuccess)
  .fail(authUi.fail);
};

// On document ready
$(() => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  //authEvents.addHandlers();
});
