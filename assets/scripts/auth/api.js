'use strict';

const signUp = (success, failure, data) => {
  if (Math.random() > 0.5) {
    success('in signUp');
  } else {
    let error = new Error('Random');
    error.data = data;
    failure(error);
  }
};

module.exports = {
  signUp,
};
