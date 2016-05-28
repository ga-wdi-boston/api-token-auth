'use strict';

// imports
const game_logic = require('./game_logic.js');

// check whether dict values are the same
// the keys have to be 0, 1, 2 etc.
// this is based on matching the format we get from jQuery
const checkSame = function(dict){
  let checkVal = $(dict[0]).text();
  console.log('checkVal: ', checkVal);

  if(checkVal === ""){

    return false;

  }else{

    for(let i = 0, max = game_logic.gameSize; i < max; i++){
      if($(dict[i]).text() !== checkVal){
        return false;
      }
    }
  }
  return true;
};

// check diagonal win conditions
const checkDiags = function(){
  console.log('checking diags', $('#cell-00').text());
  // define vars
  let topLeft = $('#cell-00').text();
  let topRight = $('#cell-02').text();
  let center = $('#cell-11').text();
  let bottomLeft = $('#cell-20').text();
  let bottomRight = $('#cell-22').text();

  if(topLeft !== ''){
    if(topLeft === center === bottomRight){
      return true;
    }
  }

  if(topRight !== ''){
    if(topRight === center === bottomLeft){
      return true;
    }
  }

  return false;

};

// check the game
const checkGame = function(){
  let gameOver = false;
  if(
    checkSame($(".row-0")) === true ||
    checkSame($(".col-0")) === true ||
    checkSame($(".row-1")) === true ||
    checkSame($(".col-1")) === true ||
    checkSame($(".row-2")) === true ||
    checkSame($(".col-2")) === true ||
    checkDiags() === true
  ){
    gameOver = true;
  }

  if(gameOver === true){
    alert('Game Over!');
  }

  console.log('gameOver: ', gameOver);
  return gameOver;
};

module.exports = {
  checkSame,
  checkDiags,
  checkGame,
};
