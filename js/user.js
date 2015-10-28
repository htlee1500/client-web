$(document).ready(function () {
  var pageParams = API.Params();
  ShowForm(pageParams['id'], function (data) {
    $('#username').text(pageParams['id']);
    SetResult(data);
  });
  $('#addItem').click(function (event) {
    AddItem();
  });
  $('#submit').click(function (event) {
    var object = FormToObject();
    API.SaveAccount(object['_id'], object, function (data) {
      SetResult(object);
    });
  });
});
