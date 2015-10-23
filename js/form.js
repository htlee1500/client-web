function ShowForm(account) {
  SetItem();
  API.GetAccount(account, function (data) {
    SetItem(data);
  });
  $('#form').show();
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
