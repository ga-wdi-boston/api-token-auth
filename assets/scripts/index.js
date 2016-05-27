'use strict';

$('#game-board-section-title').hide();
$('#game-board').hide();
$('#instructructions-title').hide();
$('#instructructions').hide();

const authEvents = require('./auth/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
});
