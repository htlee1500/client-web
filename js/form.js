function ShowForm(argument) {
  SetItem();
  $('#form').show();
}

function HideForm(argument) {
  $('#form').hide();
}

function FormToObject(argument) {
  var object = {};
  var form = $('#formItems')[0].children;
  for (var i = 0; i < form.length; i++) {
    object[form[i].formIndex.value] = form[i].formValue.value;
  }
  return object;
}
