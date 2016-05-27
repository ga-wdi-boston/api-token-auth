'use strict';

$('.hideable').hide();

const authEvents = require('./auth/events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
});
