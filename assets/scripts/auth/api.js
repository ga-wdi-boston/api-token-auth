'use strict';

const app = require('../app.js');
const gameLogic = require('../game/gameLogic');

// create new user
const signUp = function(data){
  return $.ajax({
    url: app.host + '/sign-up/',
    method: 'POST',
    data: data
  });
};

// sign in
// note: `data: data` is the same as just `data` (it is implied)
const signIn = function(data){
  console.log('data is: ', data);

  return $.ajax({
    url: app.host + '/sign-in/',
    method: 'POST',
    data
  });
};

// sign out
const signOut = function(){
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  });
};

// change password
const changePassword = function(data){
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

// create new game
const newGame = function(){
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  });
};

// show all user games
const showGames = function(){
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  });
};

// show all over user games
const showOverGames = function(){
  return $.ajax({
    url: app.host + '/games?over=true',
    method: 'GET',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  });
};

const joinGame = function(){
  return $.ajax({
    url: app.host + '/games:' + gameLogic.newGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
  });
};

const updateGame = function(data){
  return $.ajax({
    url: app.host + '/games:' + gameLogic.newGame.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token='+ app.user.token,
    },
    data: data,
  });
};

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  newGame,
  showGames,
  showOverGames,
  joinGame,
  updateGame,
};
