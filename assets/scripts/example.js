'use strict';

$(document).ready(() => {
  $('#sign-up').on('submit', function(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    $.ajax({
      // url: 'http://localhost:3000/sign-up',
      url: 'http://httpbin.org/post',
      method: 'POST',
      contentType: false,
      processData: false,
      data: formData,
    }).done(function(data) {
      console.log(data);
    }).fail(function(jqxhr) {
      console.error(jqxhr);
    });
  });
});

module.exports = true;
