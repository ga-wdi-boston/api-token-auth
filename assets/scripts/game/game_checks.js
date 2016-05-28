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

// check the game
const checkGame = function(){
  let gameOver = false;
  if(
    checkSame($(".row-0")) === true ||
    checkSame($(".col-0")) === true ||
    checkSame($(".row-1")) === true ||
    checkSame($(".col-1")) === true ||
    checkSame($(".row-2")) === true ||
    checkSame($(".col-2")) === true
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
  checkGame,
  checkSame,
};
