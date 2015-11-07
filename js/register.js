$(document).ready(function () {
  $('#registerForm').submit(function (event) {
    event.preventDefault();
    var object = {};
    $(this).serializeArray().map(function (x) {
      object[x.name] = x.value;
    });
    console.log(object);
    $('#registerSubmit').attr('disable', true);
    API.RegisterUser(object,
      function (data) {
        $('#registerSubmit').attr('disable', false);
        $('#registerFormErrors').hide();
        API.LoginUser(object,
          function (data) {
            console.log("Login success", data);
            location.href = '/';
          },
          function (error) {
            $('#registerSubmit').attr('disable', false);
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
        $('#registerSubmit').attr('disable', false);
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
