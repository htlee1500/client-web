$(document).ready(function () {
  $('#account_search').keyup(function (event) {
    API.GetAccount($('#account_search').val(), function (data) {
      SetResult(data);
    });
  })
  $('#addNew').click(function (event) {
    ShowForm($('#account_search').val());
  });
  $('#addItem').click(function (event) {
    AddItem();
  });
  $('#submit').click(function (event) {
    var object = FormToObject();
    API.SaveAccount(object['_id'], object, function (data) {
      $('#account_search').val(object['_id']);
      SetResult(object);
      HideForm();
    });
  });
});
