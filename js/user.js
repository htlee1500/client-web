$(document).ready(function () {
  var pageUser = API.User();
  ShowForm(pageUser['id'], function (data) {
    $('#username').text(pageUser['id']);
    SetResult(data);
  });
  $('#addItem').click(function (event) {
    AddItem();
  });
  $('#submit').click(function (event) {
    $('#accountFormErrors').hide();
    var object = FormToObject();
    API.SaveAccount(object['_id'], object, function (data) {
      $('#accountFormErrors').hide();
      SetResult(object);
    },
    function (error) {
      if (typeof error.responseJSON !== 'undefined' &&
        typeof error.responseJSON.Error !== 'undefined') {
        $('#accountFormErrors').text(error.responseJSON.Error);
      } else {
        $('#accountFormErrors').text('There was an error saving');
      }
      $('#accountFormErrors').show();
    });
  });
});
