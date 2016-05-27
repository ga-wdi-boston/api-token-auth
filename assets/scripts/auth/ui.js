'use strict';

const app = require('../app.js');

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
  $('#game-board').show();
  $('#instructructions-title').show();
  $('#instructructions').show();
  $('#game-board-section-title').show();
};

const hideBoard = function(){
  console.log('board hidden!');
  $('#game-board-section-title').hide();
  $('#game-board').hide();
  $('#instructructions-title').hide();
  $('#instructructions').hide();
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  showBoard,
  hideBoard,
};
