$(document).ready(function () {
  $('#addItem').click(function (event) {
    AddItem();
  });
  $('#submit').click(function (event) {
    $('#accountFormErrors').hide();
    var object = FormToObject();
    API.SaveAccount(object['_id'], object,
      function (data) {
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
      }
    );
  });
});

var displayAccount = function (id) {
  if (typeof id === 'string' && id.length > 0) {
    ShowForm(id,
      function (data) {
        $('#username').text(id);
        SetResult(data);
      },
      function (error) {
        ClearResult();
        $('#form').hide();
      }
    );
  } else {
    ClearResult();
    $('#form').hide();
  }
};
