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
  $('.hideable').show();
};

const hideBoard = function(){
  console.log('board hidden!');
  $('.hideable').hide();
};

const updateStats = function(){
  console.log('updating stats!');
};

module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  showBoard,
  hideBoard,
  updateStats,
};
