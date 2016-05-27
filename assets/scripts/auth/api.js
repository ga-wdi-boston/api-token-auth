'use strict';

const app = require('../app');
const getFormFields = require('../../../lib/get-form-fields.js');

//authApi.signUp(authUi.success, authUi.failure, data);

const signUp = function(form){
  let data = getFormFields(form);
  console.log(data);
  return $.ajax({
    url: app.api + '/sign-up',
    method: 'POST',
    data: data
  });
};

const signIn = function(form){
  let data = getFormFields(form);
  console.log(data);
  return $.ajax({
    url: app.api + '/sign-in',
    method: 'POST',
    data: data
  });
};

const signOut = function(){
  return $.ajax({
    method: 'DELETE',
    url: app.api + '/sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

module.exports = {
  signUp,
  signIn,
  signOut
};
