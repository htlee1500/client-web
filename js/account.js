$(document).ready(function () {
  $('#account_search').keyup(function (event) {
    API.GetAccount($('#account_search').val(), function (data) {
      SetResult(data);
    });
  });
});
