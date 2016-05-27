'use strict';

const onSelect = function(event){
  event.preventDefault();
  console.log('made it into onSelect');
  return true;
};

const addHandlers = () => {
  $('#cell-0').on('submit', onSelect);
  $('#cell-1').on('submit', onSelect);
  $('#cell-2').on('submit', onSelect);
  $('#cell-3').on('submit', onSelect);
  $('#cell-4').on('submit', onSelect);
  $('#cell-5').on('submit', onSelect);
  $('#cell-6').on('submit', onSelect);
  $('#cell-7').on('submit', onSelect);
  $('#cell-8').on('submit', onSelect);
};

module.exports = {
  addHandlers,
};
