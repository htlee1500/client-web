$(document).ready(function () {
  $('#registerForm').submit(function (event) {
    event.preventDefault();
    var object = {};
    $(this).serializeArray().map(function (x) {
      object[x.name] = x.value;
    });
    console.log(object);
    API.RegisterUser(object,
      function (data) {
        $('#registerFormErrors').hide();
        API.LoginUser(object,
          function (data) {
            console.log("Login success", data);
            location.href = '/';
          },
          function (error) {
            if (typeof error.responseJSON !== 'undefined' &&
              typeof error.responseJSON.Error !== 'undefined') {
              $('#registerFormErrors').text(error.responseJSON.Error);
            } else {
              $('#registerFormErrors').text('There was an error loging in');
            }
            $('#registerFormErrors').show();
          }
        );
      },
      function (error) {
        if (typeof error.responseJSON !== 'undefined' &&
          typeof error.responseJSON.Error !== 'undefined') {
          $('#registerFormErrors').text(error.responseJSON.Error);
        } else {
          $('#registerFormErrors').text('There was an error registering');
        }
        $('#registerFormErrors').show();
      }
    );
    return false;
  });
});
