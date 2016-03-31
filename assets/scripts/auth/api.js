'use strict';

const signUp = (success, failure, data) => {
  Math.random() > 0.5 ? success('in signUp') : failure(data);
};

module.exports = {
  signUp,
};
