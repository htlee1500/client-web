$(document).ready(function () {
  $('#loginForm').submit(function (event) {
    event.preventDefault();
    var object = {};
    $(this).serializeArray().map(function (x) {
      object[x.name] = x.value;
    });
    console.log(object);
    API.LoginUser(object,
      function (data) {
        $('#loginFormErrors').hide();
        console.log('Logged in', data);
      },
      function (error) {
        if (typeof error.responseJSON !== 'undefined' &&
          typeof error.responseJSON.Error !== 'undefined') {
          $('#loginFormErrors').text(error.responseJSON.Error);
        } else {
          $('#loginFormErrors').text('There was an error loging in');
        }
        $('#loginFormErrors').show();
      }
    );
    return false;
  });
});
