'use strict';

//
// define games objects
//

// create new game
const game = function(gameData){
  this.id = gameData.id;
  this.cells = gameData.cells;
  this.over = gameData.over;
  this.player_x = gameData.player_x;
  this.player_o = gameData.player_o;
};

module.exports = {
  game,
};
