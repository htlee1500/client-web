$(document).ready(function () {
  $('#loginForm').submit(function (event) {
    event.preventDefault();
    var object = {};
    $(this).serializeArray().map(function (x) {
      object[x.name] = x.value;
    });
    console.log(object);
    $('#loginSubmit').attr('disable', true);
    API.LoginUser(object,
      function (data) {
        $('#loginSubmit').attr('disable', false);
        $('#loginFormErrors').hide();
        console.log('Logged in', data);
        if (data.hasOwnProperty('token')) {
          API.SetToken(data.token);
          location.href = '/';
        } else {
          $('#loginFormErrors').text('There was an error loging in');
        }
      },
      function (error) {
        $('#loginSubmit').attr('disable', false);
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
