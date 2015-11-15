function ShowForm(account, callback) {
  var user = API.User();
  API.GetAccount(account, function (data) {
    // Only if the user owns the account will they be able to save
    // this just lets the web client check if it should display the form
    // Authentication is handled server side so if they were to edit on the
    // client side it just would never save
    if (account === user['id']) {
      SetItem(data);
      $('#form').show();
    }
    if (typeof callback === 'function') {
      callback(data);
    }
  });
}

function HideForm() {
  $('#form').hide();
}

function FormToObject() {
  var object = {};
  var form = $('#formItems')[0].children;
  for (var i = 0; i < form.length; i++) {
    object[form[i].formKey.value] = form[i].formValue.value;
  }
  return object;
}
